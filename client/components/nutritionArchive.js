import React, {Component} from 'react'
import PercentAreaChart from './percentAreaChart'

class NutritionArchive extends Component {
  render() {
    return (
      <div id="nutritionArchiveContainer">
        <h1>archive: nutrition</h1>

        <PercentAreaChart />
      </div>
    )
  }
}

export default NutritionArchive
