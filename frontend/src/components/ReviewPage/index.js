import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Route, Switch, NavLink } from 'react-router-dom'
import { getReviews } from '../../store/reviewsReducer.js'
import {getOneSpot} from '../../store/spotsReducer'
import './ReviewPage.css'

const ReviewPage = () => {
    const dispatch = useDispatch()
    const  {id}  = useParams()

    useEffect(() => {
        dispatch(getReviews(id))
        dispatch(getOneSpot(id))
    }, [dispatch])

    const spot = useSelector(state => state.spots)
    const reviews = useSelector(state => state.reviews)

    return (
        <div>
            <div>{spot.title}</div>
            <div>
            {reviews?.map(review => (

                    <h1>{review.body}</h1>
            ))}
            </div>
        </div>
    )
}

export default ReviewPage
