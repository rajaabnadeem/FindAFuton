import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Route, Switch, NavLink } from 'react-router-dom'
import { getReviews } from '../../store/reviewReducer'
import {getOneSpot} from '../../store/spotReducer'
import './SpotPage.css'

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
        <div className = 'container'>
            <div className = 'container__spot'>
            <div className = 'info'>
                <NavLink className = 'spot__title' to = {`spots/${spot.id}`}>{spot.title}</NavLink>
                <h3 className = 'address'>{spot.address}, {spot.state} {spot.zipCode}</h3>
                <h3>{spot.body}</h3>
                <h4> Hosted by {spot.firstName} {spot.lastName}</h4>
                <div className= 'container__reviews'>Reviews
                <div>
                {reviews?.map(review => (
                        <div className = 'container__review'>{review.body}</div>
                 ))}
                 </div>
            </div>
            </div>
            <div className ='photos'>
                <h3>Photos</h3>
                    <img src={spot.photo1}></img>
                    <img src={spot.photo2}></img>
                    <img src={spot.photo3}></img>
                    <img src={spot.photo4}></img>
            </div>

            </div>
            </div>
    )
}
/* {/*
//     return (
//         <div>
//             <div>{spot.title}</div>
//             <div>
//             {reviews?.map(review => ( */
/*
//                     <h1>{review.body}</h1>
//             ))}
//             </div> */
/* //         </div> */
/* //     )
// } */

export default ReviewPage
