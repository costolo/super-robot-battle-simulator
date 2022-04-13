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

function App() {
  /** state vars */
  const [step, setStep] = useState(0)
  const [robotOne, setRobotOne] = useState({})
  const [robotTwo, setRobotTwo] = useState({})
  const [mainButtonDisabled, setMainButtonDisabled] = useState(true)
  const [winningRobot, setWinningRobot] = useState(null)

  const incrementGameStep = () => {
    const nextStep = step + 1
    setStep(nextStep)
  }

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
    setWinningRobot(winningRobot)
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
        <RobotCard robot={robotOne} winner={isRobotOneWinner(winningRobot, robotOne)} />
        <RobotCard robot={robotTwo} winner={isRobotTwoWinner(winningRobot, robotTwo)} />
      </div>
      <div className="App__main-button-container"></div>
      <MainButton
        disabled={mainButtonDisabled}
        step={step}
        onClick={handleMainButtonClick}
      />
      <div className="App__robot-figure-container">
        {robots.map((robot) => (
          <RobotFigure
            key={robot.name}
            robot={robot}
            handleSetRobot={handleSetRobot}
          />
        ))}
      </div>
      {step < 2 && (
        <div className="App__player-turn">
          {step === 0 ? 'Player 1 Select' : 'Player 2 Select'}
        </div>
      )}
    </div>
  )
}

export default App
