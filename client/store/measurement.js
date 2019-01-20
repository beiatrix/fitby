import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
// const ADD_FOOD = 'ADD_FOOD'
const GOT_DATA_FROM_SERVER = 'GOT_DATA_FROM_SERVER'
const GOT_NEW_DATA_FROM_SERVER = 'GOT_NEW_DATA_FROM_SERVER'

/**
 * INITIAL STATE
 */
const initialState = []
// array of measurement objects
// like this:
// {
//   catgory: 'weight',
//   data: 109.7
// }

/**
 * ACTION CREATORS
 */

// export const addFood = food => ({
//   type: ADD_FOOD,
//   food
// })

export const gotData = measurements => ({
  type: GOT_DATA_FROM_SERVER,
  measurements // an array of measurements objects
})

export const gotNewData = measurement => ({
  type: GOT_NEW_DATA_FROM_SERVER,
  measurement // a single food object
})

/**
 * THUNK CREATORS
 */

// post food to server
export const postData = measurement => async dispatch => {
  try {
    //foodInfo param is an object
    // console.log('in redux', food)
    const res = await axios.post('/api/food', measurement)
    dispatch(gotNewData(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const fetchMeasurements = () => async dispatch => {
  try {
    const res = await axios.get('/api/food')
    dispatch(gotData(res.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    // case ADD_FOOD:
    //   return [...state, action.food]
    case GOT_NEW_DATA_FROM_SERVER:
      return [...state, action.measurement]
    case GOT_DATA_FROM_SERVER:
      return [...state, ...action.measurements]
    default:
      return state
  }
}
