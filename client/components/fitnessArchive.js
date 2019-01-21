import React, {Component} from 'react'
import PercentAreaChart from './percentAreaChart'

class FitnessArchive extends Component {
  render() {
    return (
      <div id="fitnessArchiveContainer">
        <h1>archive: fitness</h1>

        <PercentAreaChart />
      </div>
    )
  }
}

export default FitnessArchive
