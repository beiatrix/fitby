import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Login,
  SignUp,
  UserHome,
  Home,
  Nutrition,
  Fitness,
  Dashboard,
  NutritionArchive,
  FitnessArchive
} from './components'
import {me, fetchFood, fetchMeasurements} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  async componentDidMount() {
    await this.props.fetchFood()
    await this.props.fetchMeasurements()
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/dashboard" component={Dashboard} />
            <Route exact path="/nutrition" component={Nutrition} />
            <Route path="/nutrition/archive" component={NutritionArchive} />
            <Route exact path="/fitness" component={Fitness} />
            <Route exact path="/fitness/archive" component={FitnessArchive} />
            <Route path="/profile" component={UserHome} />
            <Route path="/" component={Home} />
          </Switch>
        )}
        {/* Displays our Home component as a fallback */}
        <Route component={Home} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => ({
  fetchFood: () => dispatch(fetchFood()),
  fetchMeasurements: () => dispatch(fetchMeasurements()),
  loadInitialData: () => dispatch(me())
})

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
