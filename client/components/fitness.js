import React from 'react'
import {connect} from 'react-redux'

const Fitness = props => {
  const {user} = props

  return (
    <div id="fitnessContainer">
      <h1>fitness</h1>
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

export default connect(mapStateToProps)(Fitness)
