import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Animated} from 'react-animated-css'
// import classNames from 'classnames'

/**
 * COMPONENT
 */
export const Home = props => {
  return (
    <div id="home">
      <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
        <h1>fitby</h1>
      </Animated>
      <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
        <h3>a minimalist fitness dashboard</h3>
      </Animated>
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
