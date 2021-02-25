import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Route, Switch, NavLink } from 'react-router-dom'
import { getSpots } from '../../store/items.js'
import './SpotsPage.css'

const SpotList = () => {
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
             {spots.map(spot => (
                 <div className = 'single__spot'>
                 <NavLink to = {`spots/${spot.id}`}>{spot.title}</NavLink>
                 <h4>{spot.body}</h4>
                 </div>
            ))}
            </div>
        </div>
    )
}
export default SpotList
