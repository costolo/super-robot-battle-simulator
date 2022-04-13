import React from 'react'
import PropTypes from 'prop-types'
import { Figure } from 'react-bootstrap'

const RobotFigure = (props) => {
  const { robot } = props
  return (
    <Figure>
      <Figure.Image src={robot.image} alt="robot" />
      <Figure.Caption>{robot.name}</Figure.Caption>
    </Figure>
  )
}

RobotFigure.propTypes = {
  robot: PropTypes.object
}

export default RobotFigure
