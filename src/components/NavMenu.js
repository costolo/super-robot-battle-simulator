import React from 'react'
import PropTypes from 'prop-types'
import { Offcanvas } from 'react-bootstrap'

const NavMenu = (props) => {
  const { show, handleClose, page, handleSetPage } = props
  const handleNavMenuItemClick = () => {
    if (page === 'battle') {
      handleSetPage('stats')
    } else {
      handleSetPage('battle')
    }
  }
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body onClick={handleNavMenuItemClick}>
        {page === 'battle' ? 'View Stats' : 'Battle'}
      </Offcanvas.Body>
    </Offcanvas>
  )
}

NavMenu.propTypes = {
  page: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSetPage: PropTypes.func.isRequired
}

export default NavMenu
