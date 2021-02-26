import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Route, Switch, NavLink } from 'react-router-dom'
import reviewReducer from '../../store/reviewsReducer.js';
import { getSpots } from '../../store/spotsReducer.js'

import './SpotsPage.css'

const SpotPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSpots())
    }, [dispatch])

    const spots = useSelector(state => state.spots);
    return (
        <div className = 'container'>
            <div className = 'container__header'>
                <div className = 'header'> </div>
                <div className ='header__top'>
                    <div className = 'logo'>Find a Futon</div>
                    <div className = 'stay'>Places to Stay</div>
                    <div className = 'host'>Become a Host</div>
                </div>
                <div className = 'header__bottom'>Find your next couch to surf</div>
            </div>
            <div className = 'container__spots'>
                {spots.length && spots.map(spot => (
                    <div key = {spot.id} className = 'single__spot'>

                        <div className = 'info'>
                            <NavLink className = 'spot__title' to = {`spots/${spot.id}`}>{spot.title}</NavLink>
                            <h3 className = 'address'>{spot.address}, {spot.state} {spot.zipCode}</h3>
                            <h3>{spot.body}</h3>
                            <h4> Hosted by {spot.firstName} {spot.lastName}</h4>
                        </div>
                        <div className ='photos'>
                            <h3>Photos</h3>
                            <img src={spot.photo1}></img>
                            <img src={spot.photo2}></img>
                            <img src={spot.photo3}></img>
                            <img src={spot.photo4}></img>
                        </div>
                    </div>
                 ))}
            </div>
        </div>
    )
}
export default SpotPage
