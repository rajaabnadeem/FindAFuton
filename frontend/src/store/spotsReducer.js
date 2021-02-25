import {useEffect} from 'react'

export const LOAD_SPOTS = 'spots/LOAD_SPOTS'
export const REMOVE_SPOT = "spots/REMOVE_SPOT";
export const UPDATE_SPOT = "spots/UPDATE_SPOT";
export const ADD_SPOT = "spots/ADD_SPOT";
export const LOAD_ONE_SPOT = 'spots/LOAD_ONE_SPOT'

const load = (spots) => ({
    type: LOAD_SPOTS,
    spots
})

const update = (spot) => ({
    type: UPDATE_SPOT,
    spot
})

const add = (spot) => ({
    type: ADD_SPOT,
    spot
})

const remove = (spots) => ({
    type: REMOVE_SPOT,
    spots
})

const loadOneSpot = (spot) => ({
  type: LOAD_ONE_SPOT,
  spot
})

export const getSpots = (spotId) => async dispatch => {
    const response = await fetch(`api/spots`)

    if (!response.ok) throw response
    const spots = await response.json()
    dispatch(load(spots))
    return spots
}

export const getOneSpot = (spotId) => async dispatch => {
  const response = await fetch(`/api/spots/${spotId}`)

  if (!response.ok) throw response
  const oneSpot = await response.json()
  dispatch(loadOneSpot(oneSpot.spot))
  return oneSpot
}

const initialState = []

const spotsReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOAD_SPOTS: {
         const newState = action.spots
        action.spots.forEach(spot => {
          spot = newState[spot.id]
        })
        return newState
      }
      case REMOVE_SPOT: {
        const newState = { ...state };
        delete newState[action.spotId];
        return newState;
      }
      case ADD_SPOT:
      case UPDATE_SPOT: {
        return {
          ...state,
          [action.spot.id]: action.spot,
        };
      }
      case LOAD_ONE_SPOT: {
        return action.spot
      }
      default:
        return state;
    }
  };


  export default spotsReducer;
