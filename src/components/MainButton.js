import React from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

const MainButton = (props) => {
  const { disabled, step, onClick, resetGameState } = props
  return (
    <Button onClick={step < 3 ? onClick : resetGameState} disabled={disabled}>
      {step < 3 ? 'FIGHT' : 'Play Again'}
    </Button>
  )
}

MainButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  step: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  resetGameState: PropTypes.func.isRequired
}

export default MainButton
