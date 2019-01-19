import React, {Component} from 'react'
import {connect} from 'react-redux'
import SimplePieChart from './simplePieChart'
import FoodCard from './foodCard'
import {fetchFood} from '../store'
import {renderByOrder} from 'recharts/lib/util/ReactUtils'

class Nutrition extends Component {
  constructor() {
    super()
    this.calculateHealth = this.calculateHealth.bind(this)
  }
  async componentDidMount() {
    await this.props.fetchFood()
  }

  // converts array of food to array of health percentage values
  calculateHealth(food) {
    let percentHealthy = +(
      food.reduce((acc, el) => {
        if (el.healthy) {
          acc++
        }
        return acc
      }, 0) /
      food.length *
      100
    ).toFixed(2)
    let notHealthy = +(100 - percentHealthy).toFixed(2)

    return [
      {name: 'healthy', value: percentHealthy},
      {name: 'not-so-healthy', value: notHealthy}
    ]
  }

  render() {
    const {user, food} = this.props

    return (
      <div id="nutritionContainer">
        <h1>nutrition</h1>
        <div id="nutritionComponents">
          <h2>
            so far, you've eaten {this.calculateHealth(food)[0].value}% healthy!
          </h2>
          <div id="nutritionLeft">
            <SimplePieChart data={this.calculateHealth(food)} />
          </div>

          <div id="nutritionRight">
            <FoodCard food={food} />
          </div>
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapStateToProps = state => ({
  user: state.user,
  food: state.food
})

const mapDispatchToProps = dispatch => ({
  fetchFood: () => dispatch(fetchFood())
})

export default connect(mapStateToProps, mapDispatchToProps)(Nutrition)
