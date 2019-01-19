import React, {Component} from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import {withStyles, withTheme} from '@material-ui/core/styles'

import AddFood from './addFood'

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

class FoodCard extends Component {
  componentDidMount() {
    this.setState({})
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    const {classes} = this.props

    return (
      <Card id="foodCard">
        <div id="foodCardHeader">
          <h3>+ TODAY'S FOOD</h3>
        </div>
        <AddFood classes={classes} />
      </Card>
    )
  }
}

export default withStyles(styles)(FoodCard)

// checkbox

/* <FormControlLabel
  control={<Checkbox value="remember" color="primary" />}
  label="Remember me"
/> */
