import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button, Form } from 'react-bootstrap'

const AddRobotModal = (props) => {
  const { show, handleClose, handleAddRobot } = props

  const [attack, setAttack] = useState('')
  const [attackError, setAttackError] = useState(false)
  const [defense, setDefense] = useState('')
  const [defenseError, setDefenseError] = useState(false)
  const [name, setName] = useState('')
  const handleFormSubmit = (e) => {
    e.preventDefault()
    const numericAttack = Number(attack)
    const numericDefense = Number(defense)

    if (Number.isNaN(numericAttack) && Number.isNaN(numericDefense)) {
      setAttackError(true)
      setDefenseError(true)
      return
    } else if (Number.isNaN(numericAttack)) {
      setAttackError(true)
      return
    } else if (Number.isNaN(numericDefense)) {
      setDefenseError(true)
      return
    }
    setAttackError(false)
    setDefenseError(false)
    setAttack('')
    setDefense('')
    setName('')

    const payload = {
      name,
      attack: numericAttack,
      defense: numericDefense
    }

    return handleAddRobot(payload)
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add a Robot</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Robot Name</Form.Label>
            <Form.Control
              required
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter Robot Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAttack">
            <Form.Label>Robot Attack</Form.Label>
            <Form.Control
              required
              onChange={(e) => setAttack(e.target.value)}
              type="text"
              placeholder="Enter Robot Attack"
            />
            {attackError && (
              <div className="form-error">Attack must be a valid integer</div>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDefense">
            <Form.Label>Robot Defense</Form.Label>
            <Form.Control
              required
              onChange={(e) => setDefense(e.target.value)}
              type="text"
              placeholder="Enter Robot Defense"
            />
            {defenseError && (
              <div className="form-error">Defense must be a valid integer</div>
            )}
          </Form.Group>
          <div className="add-robot-modal__button-container">
            <Button variant="primary" type="submit">
              Add Robot
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

AddRobotModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleAddRobot: PropTypes.func.isRequired
}

export default AddRobotModal
