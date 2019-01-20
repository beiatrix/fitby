import React from 'react'
import {connect} from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import SimpleLineChart from './simpleLineChart'
import MeasurementCard from './measurementCard'

const Fitness = props => {
  const {measurements} = props

  return (
    <div id="fitnessContainer">
      <CssBaseline />

      <h1>fitness</h1>
      {/* LINE CHART */}
      <div id="fitnessComponents">
        <div className="chartContainer">
          <SimpleLineChart measurements={measurements} />
        </div>
        <MeasurementCard className="fitnessRight" />
      </div>
      {/* <h2>dailies</h2>
      <div id="dailiesContainer">
        <h4>CARDIO</h4>
        <h4>PROTEIN</h4>
        <h4>YOGA</h4>
      </div> */}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapStateToProps = state => {
  return {
    measurements: state.measurements
  }
}

export default connect(mapStateToProps)(Fitness)
