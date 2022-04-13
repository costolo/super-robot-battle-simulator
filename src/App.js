import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import {
  robots,
  computeWinningRobot,
  isRobotOneWinner,
  isRobotTwoWinner
} from './utils'
import HamburgerIcon from './icons/HamburgerIcon'
import RobotCard from './components/RobotCard'
import MainButton from './components/MainButton'
import RobotFigure from './components/RobotFigure'
import AddRobotModal from './components/AddRobotModal'

function App() {
  /** state vars */
  const [robotList, setRobotList] = useState(robots)
  const [step, setStep] = useState(0)
  const [robotOne, setRobotOne] = useState({})
  const [robotTwo, setRobotTwo] = useState({})
  const [mainButtonDisabled, setMainButtonDisabled] = useState(true)
  const [winningRobot, setWinningRobot] = useState(null)
  const [showAddRobotModal, setShowAddRobotModal] = useState(false)

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

  return (
    <div className="App">
      <div className="App__header-container">
        <div className="App__hamburger">
          <HamburgerIcon />
        </div>
        <div className="App__header">Super Robot Battle Simulator</div>
      </div>
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
      <div className="App__main-button-container"></div>
      <MainButton
        disabled={mainButtonDisabled}
        step={step}
        onClick={handleMainButtonClick}
        resetGameState={resetGameState}
      />
      <div className="App__robot-figure-container">
        {robotList.map((robot) => (
          <RobotFigure
            key={robot.name}
            robot={robot}
            handleSetRobot={handleSetRobot}
            handleAddRobotModalShow={handleAddRobotModalShow}
            step={step}
          />
        ))}
      </div>
      {step < 2 && (
        <div className="App__player-turn">
          {step === 0 ? 'Player 1 Select' : 'Player 2 Select'}
        </div>
      )}
      <AddRobotModal
        show={showAddRobotModal}
        handleClose={handleAddRobotModalClose}
        handleAddRobot={handleAddRobot}
      />
    </div>
  )
}

export default App
