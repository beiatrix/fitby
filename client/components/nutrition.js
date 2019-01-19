import React, {Component} from 'react'
import {connect} from 'react-redux'
import SimplePieChart from './simplePieChart'
import FoodCard from './foodCard'
import {fetchFood} from '../store'
import {renderByOrder} from 'recharts/lib/util/ReactUtils'

class Nutrition extends Component {
  async componentDidMount() {
    await this.props.fetchFood()
  }

  render() {
    const {user, food} = this.props

    return (
      <div id="nutritionContainer">
        <h1>nutrition</h1>
        <div id="nutritionComponents">
          <h2>so far, you've eaten 72% healthy!</h2>
          <div id="nutritionLeft">
            <SimplePieChart />
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
