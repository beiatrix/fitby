import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const Home = props => {
  return (
    <div id="home">
      <h1>fitby</h1>
      <h3>a minimalist fitness dashboard</h3>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user
  }
}

export default connect(mapState)(Home)

/**
 * PROP TYPES
 */
// Home.propTypes = {
//   email: PropTypes.string
// }
