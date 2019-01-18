import React from 'react'
import {connect} from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import SimpleLineChart from './simpleLineChart'

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
