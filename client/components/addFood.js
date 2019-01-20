import React, {Component} from 'react'
import {connect} from 'react-redux'
import {postFood} from '../store'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'

import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

class AddFood extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      healthy: false
    }
    this.handleCheck = this.handleCheck.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleCheck(event) {
    this.setState({
      healthy: event.target.checked
    })
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    let newFood = {
      name: this.state.name,
      healthy: this.state.healthy
    }
    this.props.postFood(newFood)
  }

  render() {
    const {classes} = this.props

    return (
      <div>
        <div className={classes.root}>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<AddIcon />} />
            <form className={classes.form} onSubmit={this.handleSubmit}>
              <CardContent>
                {/* food input */}
                <FormControl margin="none" required fullWidth>
                  <InputLabel htmlFor="food">enter food</InputLabel>
                  <Input
                    onChange={this.handleChange}
                    name="food"
                    id="food"
                    value={this.state.name}
                  />
                </FormControl>
                {/* healthy? */}
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={this.handleCheck}
                      value="true"
                      color="default"
                    />
                  }
                  label="healthy?"
                />
              </CardContent>
              <CardActions>
                <Button type="submit" id="addFoodSubmit" fullWidth>
                  SUBMIT
                </Button>
              </CardActions>
            </form>
          </ExpansionPanel>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  food: state.food
})

const mapDispatchToProps = dispatch => {
  return {
    postFood: food => dispatch(postFood(food))
  }
}

const ConnectedAddFood = connect(mapStateToProps, mapDispatchToProps)(AddFood)
export default ConnectedAddFood
