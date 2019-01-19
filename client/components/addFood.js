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

class AddFood extends Component {
  state = {
    type: ''
  }

  componentDidMount() {
    this.setState({
      // labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
    })
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    const {classes, day} = this.props

    return (
      <Card id="addFood">
        <div id="addFoodHeader">
          <h3>{day}</h3>
        </div>
        <CardContent>
          <form className={classes.form}>
            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="data">enter amount</InputLabel>
              <Input name="data" id="data" />
            </FormControl>
          </form>
        </CardContent>
        <CardActions>
          <Button id="addFoodSubmit" fullWidth>
            SUBMIT
          </Button>
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(styles)(AddFood)
