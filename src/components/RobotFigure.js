import React from 'react'
import PropTypes from 'prop-types'
import { Figure, Button } from 'react-bootstrap'

const RobotFigure = (props) => {
  const { robot, handleSetRobot } = props

  const handleClick = () => {
    handleSetRobot(robot)
  }

  return (
    <Figure onClick={handleClick}>
      <Figure.Image src={robot.image} alt="robot" />
      <Figure.Caption>{robot.name}</Figure.Caption>
      <Button>Choose Robot</Button>
    </Figure>
  )
}

RobotFigure.propTypes = {
  robot: PropTypes.object,
  handleSetRobot: PropTypes.func.isRequired
}

export default RobotFigure
