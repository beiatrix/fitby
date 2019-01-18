import React from 'react'
import {connect} from 'react-redux'
import SimplePieChart from './simplePieChart'

const Nutrition = props => {
  const {user} = props

  return (
    <div id="nutritionContainer">
      <h1>nutrition</h1>
      <SimplePieChart />
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
