import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const ADD_FOOD = 'ADD_FOOD'
const GOT_NEW_FOOD_FROM_SERVER = 'GOT_NEW_FOOD_FROM_SERVER'

/**
 * INITIAL STATE
 */
// array of food objects - foods have a string `name` and a boolean `healthy`
// like this:
// {
//   name: 'banana',
//   healthy: 'true'
// }
const initialState = []

/**
 * ACTION CREATORS
 */
// export const addFood = food => ({
//   type: ADD_FOOD,
//   food
// })

export const gotFood = food => ({
  type: GOT_NEW_FOOD_FROM_SERVER,
  food
})

/**
 * THUNK CREATORS
 */

// post food to server
export const postFood = food => async dispatch => {
  try {
    //foodInfo param is an object
    console.log('in redux', food)
    const res = await axios.post('/api/food', food)
    dispatch(gotFood(res.data))
  } catch (err) {
    console.error(err)
  }
}

// export const fetchFood = () => async dispatch => {
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
    // case ADD_FOOD:
    //   return [...state, action.food]
    case GOT_NEW_FOOD_FROM_SERVER:
      return [...state, action.food]
    default:
      return state
  }
}
