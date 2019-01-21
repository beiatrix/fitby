import React, {Component} from 'react'
import {connect} from 'react-redux'
import SimpleLineChart from './simpleLineChart'
import StackedBarChart from './stackedBarChart'

class FitnessArchive extends Component {
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

    return (
      <div id="fitnessArchiveContainer">
        <h1>archive: fitness</h1>
        <div id="measurementArchiveContainer">
          <SimpleLineChart measurements={this.processData(measurements)} />
        </div>
        <div id="workoutArchiveContainer">
          <div id="workoutArchiveLeft">
            <h2>workout history</h2>
          </div>
          <div id="workoutArchiveRight">
            <StackedBarChart />
          </div>
        </div>
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

export default connect(mapStateToProps)(FitnessArchive)
