import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Route, Switch, NavLink } from 'react-router-dom'
import { getSpots } from '../../store/spotsReducer.js'

import './SpotsPage.css'

const SpotPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSpots())
    }, [dispatch])

    const spots = useSelector(state => state.spots);
    return (
        <div className = 'container__spots'>
            <div className = 'container__header'>
                <div className = 'header'>Spots</div>
            </div>
                <div className = 'all__spots'>

             {spots.length && spots.map(spot => (
                 <div key = {spot.id} className = 'single__spot'>
                 <NavLink to = {`spots/${spot.id}`}>{spot.title}</NavLink>
                 <h4>{spot.body}</h4>
                 <h1>{spot.firstName}</h1>
                 <h3>{spot.lastName}</h3>
                 </div>
            ))}
            </div>
        </div>
    )
}
export default SpotPage
