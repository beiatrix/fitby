import React from 'react'
import {connect} from 'react-redux'
import SimplePieChart from './simplePieChart'
import AddFood from './addFood'

const weekdays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
  'Notes'
]

const Nutrition = props => {
  const {user} = props

  return (
    <div id="nutritionContainer">
      <h1>nutrition</h1>
      <h2>so far, you've eaten 72% healthy!</h2>

      <SimplePieChart />
      <div id="foodCards">
        {weekdays.map((day, idx) => {
          return <AddFood key={`weekday-${idx}`} day={day} />
        })}
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
