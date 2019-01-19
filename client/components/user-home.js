import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {logout} from '../store'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {user, handleClick} = props

  return (
    <div id="userHomeContainer">
      <h1>{user.firstName}</h1>
      <div id="userHome">
        <div id="userPhoto">
          <img src={user.photo} />
        </div>
        <div id="userInfoContainer">
          <h2>Account</h2>
          <div id="userInfo">
            <div id="userLeft">
              <h4>First Name</h4>
              <h4>Last Name</h4>
              <h4>Email</h4>
            </div>
            <div id="userRight">
              <p>{user.firstName}</p>
              <p>{user.lastName}</p>
              <p>{user.email}</p>
            </div>
          </div>
          <button type="button">
            <a href="#" onClick={handleClick}>
              Log Out
            </a>
          </button>
        </div>
      </div>
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

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  handleClick: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}
