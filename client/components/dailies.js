import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addDaily} from '../store'
import IconButton from '@material-ui/core/IconButton'
import CheckboxIcon from '@material-ui/icons/CheckBox'
import CheckboxOutlineIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun'
import SpaIcon from '@material-ui/icons/Spa'
import FitnessCenterIcon from '@material-ui/icons/FitnessCenterRounded'

class Dailies extends Component {
  constructor() {
    super()
    this.handleCardio = this.handleCardio.bind(this)
    this.handleWeights = this.handleWeights.bind(this)
    this.handleStretch = this.handleStretch.bind(this)
  }

  handleCardio() {
    this.props.addDaily({
      name: 'cardio',
      done: true
    })
  }

  handleWeights() {
    this.props.addDaily({
      name: 'weights',
      done: true
    })
  }

  handleStretch() {
    this.props.addDaily({
      name: 'stretching',
      done: true
    })
  }

  render() {
    const {daily} = this.props

    return (
      <div id="dailies">
        {/* CARDIO */}
        <div className="daily">
          <div className="dailyButton">
            <IconButton color="inherit" onClick={this.handleCardio}>
              {//if cardio is in the daily prop at all, that means it was added to redux once & must be true
              daily.some(el => el.name === 'cardio') ? (
                <CheckboxIcon className="material-icons md-36" />
              ) : (
                <CheckboxOutlineIcon className="material-icons md-36" />
              )}
            </IconButton>
          </div>
          <h3>CARDIO</h3>
          &nbsp;
          <DirectionsRunIcon />
        </div>

        {/* WEIGHTS */}
        <div className="daily">
          <div className="dailyButton">
            <IconButton color="inherit" onClick={this.handleWeights}>
              {daily.some(el => el.name === 'weights') ? (
                <CheckboxIcon className="material-icons md-36" />
              ) : (
                <CheckboxOutlineIcon className="material-icons md-36" />
              )}
            </IconButton>
          </div>
          <h3>WEIGHTS</h3>
          &nbsp;
          <FitnessCenterIcon />
        </div>

        {/* STRETCHING */}
        <div className="daily">
          <div className="dailyButton">
            <IconButton color="inherit" onClick={this.handleStretch}>
              {daily.some(el => el.name === 'stretching') ? (
                <CheckboxIcon className="material-icons md-36" />
              ) : (
                <CheckboxOutlineIcon className="material-icons md-36" />
              )}
            </IconButton>
          </div>
          <h3>STRETCHING</h3>
          &nbsp;
          <SpaIcon />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  daily: state.daily
})

const mapDispatchToProps = dispatch => {
  return {
    addDaily: daily => dispatch(addDaily(daily))
  }
}

const ConnectedDailies = connect(mapStateToProps, mapDispatchToProps)(Dailies)
export default ConnectedDailies
