import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap'

const RobotCard = (props) => {
  const { robot } = props
  return (
    <Card className="robot-card">
      <Card.Img src={robot.image}></Card.Img>
      <Card.Body>
        <Card.Title>{robot.name}</Card.Title>
        <Card.Text>
          <ul>
            <li>Attack: {robot.attack}</li>
            <li>Defense: {robot.defense}</li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default RobotCard

RobotCard.propTypes = {
  robot: PropTypes.object,
  winner: PropTypes.bool
}
