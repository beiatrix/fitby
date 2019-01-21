import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const ADD_DAILY = 'ADD_DAILY'

/**
 * INITIAL STATE
 */
const initialState = []
// array of daily objects
// {
//   name: 'cardio',
//   done: 'true'
// }

/**
 * ACTION CREATORS
 */
export const addDaily = daily => ({
  type: ADD_DAILY,
  daily
})

/**
 * THUNK CREATORS
 */

// post food to server
// export const postFood = food => async dispatch => {
//   try {
//     //foodInfo param is an object
//     // console.log('in redux', food)
//     const res = await axios.post('/api/food', food)
//     dispatch(gotNewFood(res.data))
//   } catch (err) {
//     console.error(err)
//   }
// }

// export const fetchFood = () => async dispatch => {
//   try {
//     const res = await axios.get('/api/food')
//     dispatch(gotFood(res.data))
//   } catch (err) {
//     console.error(err)
//   }
// }

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_DAILY:
      return [...state, action.daily]
    default:
      return state
  }
}
