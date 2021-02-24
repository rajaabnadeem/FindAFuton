import { Route, Switch, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getSpots } from '../../reducers/spotReducer'
import { useEffect } from 'react'
import spot from '../../../../backend/db/models/spot'


function getSpotsPage() {
    const dispatch = useDispatch()


    return (
        <div>
            <NavLink key = {spot.name} to = {`spot/${spot.id}`}>

            </NavLink>
        </div>
    )
}
// const spotList = () => {
//     const dispatch = useDispatch()
//     const spot = useSelector((state) => state)
//     useEffect(() => {
//         dispatch(getSpots())
//     }, [dispatch])

//     return (
//         <div>
//             <h1>Spots List</h1>
//             <ol>
//                 {spot &&
//                 spot.map(({ title, body }) => (
//                     <NavLink key ={id} to = {``} />
//                 ))}
//             </ol>
//             <Switch>



//             </Switch>

//         </div>
//     )
// }
