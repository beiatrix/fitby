import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addFood} from '../store'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'

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
      healthy: event.target.value
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
    this.props.addFood(newFood)
  }

  render() {
    const {classes} = this.props

    return (
      <div>
        <form className={classes.form} onSubmit={this.handleSubmit}>
          <CardContent>
            {/* food input */}
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="food">add food</InputLabel>
              <Input onChange={this.handleChange} name="food" id="food" />
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
              label="healthy? *"
            />
          </CardContent>
          <CardActions>
            <Button type="submit" id="addFoodSubmit" fullWidth>
              SUBMIT
            </Button>
          </CardActions>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addFood: food => dispatch(addFood(food))
  }
}

const ConnectedAddFood = connect(null, mapDispatchToProps)(AddFood)
export default ConnectedAddFood
