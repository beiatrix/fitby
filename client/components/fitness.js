import React, {Component} from 'react'
import {connect} from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import SimpleLineChart from './simpleLineChart'
import MeasurementCard from './measurementCard'
import Dailies from './dailies'

class Fitness extends Component {
  constructor() {
    super()
    this.processData = this.processData.bind(this)
  }

  //processes database JSON data into an array that recharts can understand
  //see bottom of this component for example input => output
  processData(data) {
    //helper function formats sequelize createdAt date to readable string
    // input: '2019-01-20T04:20:30.847Z'
    // output: 01/20
    const convertDate = str => {
      return `${str.slice(5, 7)}/${str.slice(8, 10)}`
    }
    const reduced = data
      .map(el => {
        // map removes unnecessary data from JSON
        let obj = {name: convertDate(el.createdAt)}
        obj[el.category] = el.data
        // console.log(obj)
        return obj
      })
      .reduce((acc, el) => {
        // reduce finds unique dates
        if (el.name in acc) {
          //if date already exists in the accumulator, merge that object into existing object
          acc[el.name] = {...acc[el.name], ...el}

          //we'll add 'name' back in at the end... sort won't necessarily keep 'name' key as first value in obj
          delete acc[el.name].name

          //sort keys
          const ordered = {}
          Object.keys(acc[el.name])
            .sort()
            .forEach(key => {
              ordered[key] = acc[el.name][key]
            })

          //adds 'name' back in, spreads in sorted keys
          acc[el.name] = {name: el.name, ...ordered}
        } else {
          // create new obj w key date
          acc[el.name] = el
        }

        return acc
      }, {})

    return Object.values(reduced)
  }

  render() {
    const {measurements} = this.props
    //truncate at 14 elements
    const truncatedData = this.processData(measurements).slice(0, 14)

    return (
      <div id="fitnessContainer">
        <CssBaseline />

        <h1>fitness</h1>
        {/* LINE CHART */}
        <div id="fitnessComponents">
          <div className="chartContainer">
            <SimpleLineChart measurements={truncatedData} />
          </div>
          <MeasurementCard className="fitnessRight" />
        </div>

        <h2>did you work out today?</h2>
        <Dailies />
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

// ========== processData example input => output ==========

// const exampleInput = [
//   {
//     id: 2,
//     category: 'waist',
//     data: 27.75,
//     createdAt: '2019-01-03T04:20:30.847Z',
//     updatedAt: '2019-01-20T22:47:11.564Z',
//     userId: 1
//   },
//   {
//     id: 1,
//     category: 'weight',
//     data: 110.6,
//     createdAt: '2019-01-03T04:20:30.847Z',
//     updatedAt: '2019-01-20T22:47:11.563Z',
//     userId: 1
//   },
//   {
//     id: 3,
//     category: 'weight',
//     data: 109.6,
//     createdAt: '2019-01-05T04:20:30.847Z',
//     updatedAt: '2019-01-20T22:47:11.564Z',
//     userId: 1
//   },
//   {
//     id: 4,
//     category: 'waist',
//     data: 27.75,
//     createdAt: '2019-01-05T04:20:30.847Z',
//     updatedAt: '2019-01-20T22:47:11.564Z',
//     userId: 1
//   }
// ]

// const exampleOutput = [
//   {name: '1/03', weight: 110.6, waist: 27.75},
//   {name: '1/05', weight: 109.6, waist: 27.75}
// ]
