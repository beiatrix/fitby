import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Input from '@material-ui/core/Input'

import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import Select from '@material-ui/core/Select'
import {withStyles} from '@material-ui/core/styles'
import {postData} from '../store'
import {connect} from 'react-redux'

class AddMeasurement extends Component {
  constructor() {
    super()
    this.state = {
      category: '',
      data: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    let newMeasurement = {
      category: this.state.category,
      data: this.state.data
    }
    this.props.postData(newMeasurement)
  }

  render() {
    const {classes} = this.props

    return (
      <form className={classes.form} onSubmit={this.handleSubmit}>
        <CardContent>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="type">measurement type</InputLabel>
            <Select
              value={this.state.category}
              onChange={this.handleChange}
              name="category"
            >
              <MenuItem value="weight">weight</MenuItem>
              <MenuItem value="body fat">body fat percentage</MenuItem>
              <MenuItem value="waist">waist</MenuItem>
              <MenuItem value="hips">hips</MenuItem>
              <MenuItem value="thighs">thighs</MenuItem>
              <MenuItem value="chest">chest</MenuItem>
              <MenuItem value="arms">arms</MenuItem>
            </Select>
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="data">enter amount</InputLabel>
            <Input name="data" id="data" onChange={this.handleChange} />
          </FormControl>
        </CardContent>
        <CardActions>
          <Button id="addMeasurementSubmit" type="submit" fullWidth>
            SUBMIT
          </Button>
        </CardActions>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  measurements: state.measurements
})

const mapDispatchToProps = dispatch => {
  return {
    postData: measurement => dispatch(postData(measurement))
  }
}

const ConnectedAddMeasurement = connect(mapStateToProps, mapDispatchToProps)(
  AddMeasurement
)
export default ConnectedAddMeasurement
