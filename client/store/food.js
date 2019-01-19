import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const ADD_FOOD = 'ADD_FOOD'

/**
 * INITIAL STATE
 */
// array of food objects - foods have a string `name` and a boolean `healthy`
// like this:
// {
//   name: 'banana',
//   healthy: 'true'
// }
const initialState = {
  foods: []
}

/**
 * ACTION CREATORS
 */
export const addFood = food => ({
  type: ADD_FOOD,
  food
})

/**
 * THUNK CREATORS
 */

// post food to server

// export const me = () => async dispatch => {
//   try {
//     const res = await axios.get('/auth/me')
//     dispatch(getUser(res.data || defaultUser))
//   } catch (err) {
//     console.error(err)
//   }
// }

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_FOOD:
      return [...state, {...action.food}]
    default:
      return state
  }
}
