import React, {Component} from 'react'
import Card from '@material-ui/core/Card'
import {withStyles} from '@material-ui/core/styles'
import {connect} from 'react-redux'
import {fetchFood} from '../store'

import AddFood from './addFood'
import FoodItem from './foodItem'

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
  async componentDidMount() {
    await this.props.fetchFood()
  }

  render() {
    const {classes, food} = this.props

    return (
      <Card id="foodCard">
        <div id="foodCardHeader">
          <h3>+ TODAY'S FOOD</h3>
        </div>
        <div id="foodListContainer">
          {food.map(foodItem => {
            return <FoodItem key={foodItem.id} food={foodItem} />
          })}
        </div>
        <AddFood classes={classes} />
      </Card>
    )
  }
}

const mapStateToProps = state => ({
  food: state.food
})

const mapDispatchToProps = dispatch => ({
  fetchFood: () => dispatch(fetchFood())
})

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(FoodCard)
)
