import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap'

const RobotCard = (props) => {
  const { robot, winner } = props
  return (
    <Card className="robot-card">
      <Card.Img src={robot.image}></Card.Img>
      <Card.Body>
        <Card.Title>{robot.name}</Card.Title>
        <ul>
          <li>Attack: {robot.attack}</li>
          <li>Defense: {robot.defense}</li>
        </ul>
        {winner && typeof winner === 'boolean' && <div>Winner!</div>}
        {!winner && typeof winner === 'boolean' && <div>Loser :(</div>}
      </Card.Body>
    </Card>
  )
}

export default RobotCard

RobotCard.propTypes = {
  robot: PropTypes.object,
  winner: PropTypes.bool
}
