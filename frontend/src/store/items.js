import {useEffect} from 'react'

export const LOAD_SPOTS = 'spots/LOAD_SPOTS'
export const REMOVE_SPOT = "spots/REMOVE_SPOT";
export const UPDATE_SPOT = "spots/UPDATE_SPOT";
export const ADD_SPOT = "spots/ADD_SPOT";

const load = (spots, spotId) => ({
    type: LOAD_SPOTS,
    spots,
    spotId
})

const update = (spot) => ({
    type: UPDATE_SPOT,
    spot
})

const add = (spot) => ({
    type: ADD_SPOT,
    spot
})

const remove = (spotId) => ({
    type: REMOVE_SPOT,
    spotId
})

const initialState = {}

export const getSpots = (spotId) => async dispatch => {
    const response = await fetch(`api/spot/${spotId}`)

    if (!response.ok) throw response
    const spots = await response.json()
    dispatch(load(spots))
}



const spotsReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOAD_SPOTS: {
        const newSpots = {};
        action.spots.forEach(spot => {
          newSpots[spot.id] = spot;
        })
        return {
          ...state,
          ...newSpots
        }
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
      default:
        return state;
    }
  };

  export default spotsReducer;
