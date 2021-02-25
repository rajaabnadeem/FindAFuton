import {useEffect} from 'react'

export const LOAD_SPOTS = 'spots/LOAD_SPOTS'
export const REMOVE_SPOT = "spots/REMOVE_SPOT";
export const UPDATE_SPOT = "spots/UPDATE_SPOT";
export const ADD_SPOT = "spots/ADD_SPOT";
export const LOAD_REVIEWS = 'reviews/LOAD_REVIEWS'

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

const loadReviews = (reviews) => ({
  type: LOAD_REVIEWS,
  reviews

})


export const getSpots = (spotId) => async dispatch => {
    const response = await fetch(`api/spots`)

    if (!response.ok) throw response
    const spots = await response.json()
    dispatch(load(spots))
    return spots
}

export const getReviews = (reviewId) => async dispatch => {
  const response = await fetch (`api/reviews`)

  if (!response.ok) throw response
  const reviews = await response.json()
  dispatch(loadReviews(reviews))
  return reviews
}

const initialState = []

const spotsReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOAD_SPOTS: {
        // const newState = {...state}
        // newState.spots = action.spots
         const newSpots = action.spots
        action.spots.forEach(spot => {
          spot = newSpots[spot.id]
          // newSpots[spot.id] = spot;
        })
        return newSpots
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
