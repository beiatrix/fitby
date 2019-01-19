import React, {Component} from 'react'
import Card from '@material-ui/core/Card'
import {withStyles} from '@material-ui/core/styles'
import {connect} from 'react-redux'
// import {fetchFood} from '../store'

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
  async componentDidMount() {
    // const foods = await this.props.fetchFood()
  }

  render() {
    const {classes} = this.props
    const foods = this.props.food
    console.log('in food card component', foods)
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

const mapStateToProps = state => ({
  food: state.food
})

const mapDispatchToProps = dispatch => ({
  // fetchFood: () => dispatch(fetchFood())
})

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(FoodCard)
)

// checkbox
