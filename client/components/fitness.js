import React from 'react'
import {connect} from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import SimpleLineChart from './simpleLineChart'
import AddMeasurement from './addMeasurement'

const Fitness = props => {
  const {user} = props

  return (
    <div id="fitnessContainer">
      <CssBaseline />

      <h1>fitness</h1>
      {/* LINE CHART */}
      <div className="chartContainer">
        <SimpleLineChart />
      </div>

      <AddMeasurement />

      <h2>dailies</h2>
      <div id="dailiesContainer">
        <h4>CARDIO</h4>
        <h4>PROTEIN</h4>
        <h4>YOGA</h4>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Fitness)
