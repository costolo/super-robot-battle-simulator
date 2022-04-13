import React from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

const MainButton = (props) => {
  const { disabled } = props
  return <Button disabled={disabled}>FIGHT</Button>
}

MainButton.propTypes = {
  disabled: PropTypes.bool.isRequired
}

export default MainButton
