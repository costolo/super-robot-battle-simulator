import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import {
  robots,
  computeWinningRobot,
  isRobotOneWinner,
  isRobotTwoWinner,
  initializeLocalStorage,
  setWinningStatsToLocalStorage
} from './utils'
import HamburgerIcon from './icons/HamburgerIcon'
import RobotCard from './components/RobotCard'
import MainButton from './components/MainButton'
import RobotFigure from './components/RobotFigure'
import AddRobotModal from './components/AddRobotModal'
import NavMenu from './components/NavMenu'
import StatsPage from './components/StatsPage'

function App() {
  /** Stats initialization */
  const stats = window.localStorage.getItem('stats')
  if (!stats) {
    initializeLocalStorage()
  }

  const blankRobot = {
    attack: 'N/A',
    defense: 'N/A',
    image: '',
    name: 'N/A'
  }
  /** state vars */
  const [robotList, setRobotList] = useState(robots)
  const [step, setStep] = useState(0)
  const [robotOne, setRobotOne] = useState(blankRobot)
  const [robotTwo, setRobotTwo] = useState(blankRobot)
  const [mainButtonDisabled, setMainButtonDisabled] = useState(true)
  const [winningRobot, setWinningRobot] = useState(null)
  const [showAddRobotModal, setShowAddRobotModal] = useState(false)
  const [page, setPage] = useState('battle')
  const [showMenu, setShowMenu] = useState(false)

  /** UI utility functions */
  const incrementGameStep = () => {
    const nextStep = step + 1
    setStep(nextStep)
  }

  const resetGameState = () => {
    setStep(0)
    setRobotOne({})
    setRobotTwo({})
    setMainButtonDisabled(true)
    setWinningRobot(null)
    setPage('battle')
    setShowMenu(false)
  }

  const setActivePage = (page) => {
    setPage(page)
    setShowMenu(!showMenu)
  }

  /** Event handlers */
  const handleSetRobot = (robot) => {
    if (step === 0) {
      setRobotOne(robot)
    } else {
      setRobotTwo(robot)
      setMainButtonDisabled(false)
    }
    incrementGameStep()
  }

  const handleMainButtonClick = () => {
    const winningRobot = computeWinningRobot(robotOne, robotTwo)
    incrementGameStep()
    setWinningRobot(winningRobot)
    setWinningStatsToLocalStorage(robotOne, robotTwo, winningRobot)
  }

  const handleAddRobotModalShow = () => {
    setShowAddRobotModal(true)
  }

  const handleAddRobotModalClose = () => {
    setShowAddRobotModal(false)
  }

  const handleAddRobot = (robotData) => {
    const { name, attack, defense } = robotData
    const robot = {
      attack,
      defense,
      name,
      image: `https://robohash.org/${name}`
    }

    const lastElement = robotList[robotList.length - 1]
    const newRobotArray = robotList.slice(0, -1)
    newRobotArray.push(robot)
    newRobotArray.push(lastElement)
    setRobotList(newRobotArray)
    setShowAddRobotModal(false)
  }

  const handleDeleteRobot = (robot) => {
    const newRobotList = robotList.filter((robo) => robo.name !== robot.name)
    setRobotList(newRobotList)
  }

  const handleHamburgerClick = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className="App">
      <div className="App__header-container">
        <div className="App__hamburger" onClick={handleHamburgerClick}>
          <HamburgerIcon />
        </div>
        <div className="App__header">Super Robot Battle Simulator</div>
      </div>
      {page === 'battle' && (
        <div>
          <div className="App__robot-card-container">
            <RobotCard
              robot={robotOne}
              winner={isRobotOneWinner(winningRobot, robotOne)}
            />
            <RobotCard
              robot={robotTwo}
              winner={isRobotTwoWinner(winningRobot, robotTwo)}
            />
          </div>
          <div className="App__main-button-container">
            <MainButton
              disabled={mainButtonDisabled}
              step={step}
              onClick={handleMainButtonClick}
              resetGameState={resetGameState}
            />
          </div>
          {step < 2 && (
            <div className="App__player-turn">
              {step === 0 ? 'Player 1 Select' : 'Player 2 Select'}
            </div>
          )}
          <div className="App__robot-figure-container">
            {robotList.map((robot) => (
              <RobotFigure
                key={robot.name}
                robot={robot}
                handleSetRobot={handleSetRobot}
                handleDeleteRobot={handleDeleteRobot}
                handleAddRobotModalShow={handleAddRobotModalShow}
                step={step}
                robotOne={robotOne}
              />
            ))}
          </div>
        </div>
      )}
      {page === 'stats' && <StatsPage />}
      <AddRobotModal
        show={showAddRobotModal}
        handleClose={handleAddRobotModalClose}
        handleAddRobot={handleAddRobot}
      />
      <NavMenu
        page={page}
        show={showMenu}
        handleClose={() => {
          setShowMenu(false)
        }}
        handleSetPage={setActivePage}
      />
    </div>
  )
}

export default App
