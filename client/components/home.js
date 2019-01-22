import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Animated} from 'react-animated-css'
// import logo from '../../public/img/fitby.png'
// import classNames from 'classnames'

/**
 * COMPONENT
 */
export const Home = props => {
  return (
    <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
      <div id="home">
        <img src="http://i65.tinypic.com/3499iyq.png" alt="fitby" />
        <h3 id="subtitle">a minimalist fitness dashboard</h3>
      </div>
    </Animated>
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
