import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'react-bootstrap'
import { getStats } from '../utils'

const StatsPage = () => {
  const stats = getStats()

  return (
    <div className="stats-page">
      <h1>Battle Statistics</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Robot One</th>
            <th>Robot Two</th>
            <th>Winner</th>
          </tr>
        </thead>
        <tbody>
          {stats.map((stat, index) => {
            const { robotOne, robotTwo, winningRobot } = stat

            return (
              <tr key={index}>
                <td>{robotOne.name}</td>
                <td>{robotTwo.name}</td>
                <td>{winningRobot.name}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

StatsPage.propTypes = {
  stats: PropTypes.array
}

export default StatsPage
