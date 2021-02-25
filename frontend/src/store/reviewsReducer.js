import {useEffect} from 'react'
export const LOAD_REVIEWS = 'reviews/LOAD_REVIEWS'

const loadReviews = (reviews) => ({
    type: LOAD_REVIEWS,
    reviews
  })



  export const getReviews = (spotId) => async dispatch => {
    const response = await fetch (`/api/reviews/${spotId}`)

    if (!response.ok) throw response
    const reviews = await response.json()
    dispatch(loadReviews(reviews.reviews))
    return reviews
  }

  const initialState = []

 const reviewReducer = (state= initialState, action ) => {
    switch(action.type) {
        case LOAD_REVIEWS: {
            const newState = action.reviews
            action.reviews.map(review => {
              review = newState[review.id]
            })
            return newState
        }
        default:
          return state;
    }
}

export default reviewReducer



// const newSpots = action.spots
// action.spots.forEach(spot => {
//   spot = newSpots[spot.id]
