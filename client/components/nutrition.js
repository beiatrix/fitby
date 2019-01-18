import React from 'react'
import {connect} from 'react-redux'

const Nutrition = props => {
  const {user} = props

  return (
    <div id="nutritionContainer">
      <h1>nutrition</h1>
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
