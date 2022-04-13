import React from 'react'
import PropTypes from 'prop-types'
import { Figure, Button } from 'react-bootstrap'

const RobotFigure = (props) => {
  const {
    robot,
    handleSetRobot,
    handleAddRobotModalShow,
    step,
    handleDeleteRobot
  } = props

  const handleSelectClick = () => {
    if (!robot.name) {
      handleAddRobotModalShow()
    } else {
      handleSetRobot(robot)
    }
  }

  const handleDeleteClick = () => {
    handleDeleteRobot(robot)
  }

  return (
    <Figure className="robot-figure">
      <Figure.Image
        className="robot-figure__image"
        src={robot.image}
        alt="robot"
      />
      <Figure.Caption>{robot.name}</Figure.Caption>
      <Button onClick={handleSelectClick} disabled={step >= 2}>
        {' '}
        {!robot.name ? 'Add Robot' : 'Choose Robot'}
      </Button>
      {robot.name && (
        <Button variant="danger" onClick={handleDeleteClick}>
          Delete Robot
        </Button>
      )}
    </Figure>
  )
}

RobotFigure.propTypes = {
  robot: PropTypes.object,
  handleSetRobot: PropTypes.func.isRequired,
  handleAddRobotModalShow: PropTypes.func.isRequired,
  handleDeleteRobot: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired
}

export default RobotFigure
