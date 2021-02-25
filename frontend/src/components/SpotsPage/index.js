import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Route, Switch, NavLink } from 'react-router-dom'
import { getSpots } from '../../store/items.js'

const SpotList = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSpots())
    }, [dispatch])

    const spots = useSelector(state => state.spots);

    return (
        <div>
            <h1>Spots</h1>
            {spots.map(spot => (
                <NavLink to = {`spots/${spot.id}`}>{spot.title}</NavLink>
            ))}
                {/* {spots.forEach(spot => {
                    <NavLink to={`/spot/${spot.id}`} >{spot.title}</NavLink> */}
                {/* })} */}
        {/* <Switch>
            <Route path = {`/spot/${spotId}`}>
            </Route>
        </Switch> */}
        </div>
    )
}
export default SpotList
