import React, {Component} from 'react'
import PercentAreaChart from './percentAreaChart'
import StackedBarChart from './stackedBarChart'

class FitnessArchive extends Component {
  render() {
    return (
      <div id="fitnessArchiveContainer">
        <h1>archive: fitness</h1>
        <div id="measurementArchiveContainer">
          <PercentAreaChart />
        </div>
        <div id="workoutArchiveContainer">
          <h2>workout history</h2>
          <StackedBarChart />
        </div>
      </div>
    )
  }
}

export default FitnessArchive
