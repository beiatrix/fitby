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
      <p>a minimalist fitness dashboard</p>
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
