import React, {Component} from 'react'
import {connect} from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import SimpleLineChart from './simpleLineChart'
import MeasurementCard from './measurementCard'

const sampleInput = [
  {
    id: 1,
    category: 'weight',
    data: 110,
    createdAt: '2019-01-20T04:20:30.847Z',
    updatedAt: '2019-01-20T04:20:30.847Z',
    userId: 1
  },
  {
    id: 2,
    category: 'weight',
    data: 109.8,
    createdAt: '2019-01-20T04:20:55.211Z',
    updatedAt: '2019-01-20T04:20:55.211Z',
    userId: 1
  }
]

const goal = [
  {name: '1/20', weight: 2200, Orders: 3400},
  {name: '1/20', weight: 1280, Orders: 2398}
]

const sampleOutput = [
  {name: 'Mon', Visits: 2200, Orders: 3400},
  {name: 'Tue', Visits: 1280, Orders: 2398},
  {name: 'Wed', Visits: 5000, Orders: 4300},
  {name: 'Thu', Visits: 4780, Orders: 2908},
  {name: 'Fri', Visits: 5890, Orders: 4800},
  {name: 'Sat', Visits: 4390, Orders: 3800},
  {name: 'Sun', Visits: 4490, Orders: 4300}
]

class Fitness extends Component {
  constructor() {
    super()
    this.formatMeasurements = this.formatMeasurements.bind(this)
  }

  formatMeasurements(measurements) {
    //helper function formats sequelize createdAt date to readable string
    const convertDate = str => {
      return `${str.slice(5, 7)}/${str.slice(8, 10)}`
    }
  }

  render() {
    const {measurements} = this.props

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
