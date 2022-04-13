import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import robots from './utils/robots'
import HamburgerIcon from './icons/HamburgerIcon'
import RobotCard from './components/RobotCard'
import MainButton from './components/MainButton'
import RobotFigure from './components/RobotFigure'

function App() {
  return (
    <div className="App">
      <div className="App__header-container">
        <div className="App__hamburger">
          <HamburgerIcon />
        </div>
        <div className="App__header">Super Robot Battle Simulator</div>
      </div>
      <div className="App__robot-card-container">
        <RobotCard robot={robots[0]} />
        <RobotCard robot={robots[1]} />
      </div>
      <div className="App__main-button-container"></div>
      <MainButton />
      <div className="App__robot-figure-container">
        {robots.map((robot) => (
          <RobotFigure robot={robot} />
        ))}
      </div>
      <div className="App__player-turn">
        Player 1 Select
      </div>
    </div>
  )
}

export default App
