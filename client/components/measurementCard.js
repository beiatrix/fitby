import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Input from '@material-ui/core/Input'

import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import Select from '@material-ui/core/Select'
import {withStyles, withTheme} from '@material-ui/core/styles'

import AddMeasurement from './addMeasurement'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    color: 'white',
    fontWeight: '600',
    fontFamily: 'CircularStd, sans-serif',
    letterSpacing: '0.1rem'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
})

class MeasurementCard extends Component {
  render() {
    const {classes} = this.props

    return (
      <Card id="addMeasurement">
        <div id="addMeasurementHeader">
          <h3>+ ADD MEASUREMENT</h3>
        </div>
        <AddMeasurement classes={classes} />
      </Card>
    )
  }
}

export default withStyles(styles)(MeasurementCard)
