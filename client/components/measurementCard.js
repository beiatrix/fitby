import React from 'react'
import Card from '@material-ui/core/Card'
import {withStyles} from '@material-ui/core/styles'
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

const MeasurementCard = props => {
  const {classes} = props

  return (
    <Card id="addMeasurement">
      <div id="addMeasurementHeader">
        <h3>+ ADD MEASUREMENT</h3>
      </div>
      <AddMeasurement classes={classes} />
    </Card>
  )
}

export default withStyles(styles)(MeasurementCard)
