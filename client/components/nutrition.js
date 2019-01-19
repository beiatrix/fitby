import React from 'react'
import {connect} from 'react-redux'
import SimplePieChart from './simplePieChart'
import AddFood from './addFood'

const Nutrition = props => {
  const {user} = props

  return (
    <div id="nutritionContainer">
      <h1>nutrition</h1>
      <div id="nutritionComponents">
        <h2>so far, you've eaten 72% healthy!</h2>
        <div id="nutritionLeft">
          <SimplePieChart />
        </div>

        <div id="nutritionRight">
          <AddFood />
        </div>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Nutrition)
