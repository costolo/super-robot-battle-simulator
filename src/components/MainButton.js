import React from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

const MainButton = (props) => {
  const { disabled, step, onClick } = props
  return (
    <Button onClick={onClick} disabled={disabled}>
      {step < 3 ? 'FIGHT' : 'Play Again'}
    </Button>
  )
}

MainButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  step: PropTypes.number.isRequired
}

export default MainButton
