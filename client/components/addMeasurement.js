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

class AddMeasurement extends Component {
  constructor() {
    super()
    this.state = {
      category: '',
      data: 0
    }
  }
  state = {
    type: ''
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    const {classes} = this.props

    return (
      <form className={classes.form}>
        <CardContent>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="type">measurement type</InputLabel>
            <Select
              value={this.state.type}
              onChange={this.handleChange}
              name="type"
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
            <Input name="data" id="data" />
          </FormControl>
        </CardContent>
        <CardActions>
          <Button id="addMeasurementSubmit" fullWidth>
            SUBMIT
          </Button>
        </CardActions>
      </form>
    )
  }
}

export default AddMeasurement
