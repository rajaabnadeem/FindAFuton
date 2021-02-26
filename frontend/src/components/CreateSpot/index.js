import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { addSpot } from '../../store/spotsReducer.js'
import './CreateSpot.css'


const CreateSpot =  () =>  {
    const dispatch = useDispatch()
    const history = useHistory()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [address, setAddress] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState(0)
    const [photo1, setPhoto1] =  useState('')
    const [photo2, setPhoto2] =  useState('')
    const [photo3, setPhoto3] =  useState('')
    const [photo4, setPhoto4] =  useState('')

    const updateFirstName = (e) => setFirstName(e.target.value)
    const updateLastName = (e) => setLastName(e.target.value)
    const updateTitle = (e) => setTitle(e.target.value)
    const updateBody = (e) => setBody(e.target.value)
    const updateAddress = (e) => setAddress(e.target.value)
    const updateState = (e) => setState(e.target.value)
    const updateZipCode = (e) => setZipCode(e.target.value)
    const updatePhoto1 = (e) => setPhoto1(e.target.value)
    const updatePhoto2 = (e) => setPhoto2(e.target.value)
    const updatePhoto3 = (e) => setPhoto3(e.target.value)
    const updatePhoto4 = (e) => setPhoto4(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(firstName)
    const payload = {
        firstName,
        lastName,
        title,
        body,
        address,
        state,
        zipCode,
        photo1,
        photo2,
        photo3,
        photo4
    }

    let createdSpot = await dispatch(addSpot(payload))
    if (createdSpot) {
        history.push(`/spots/${createdSpot.id}`)
    }
}

    const handleCancelClick = (e) => {
        e.preventDefault()
        history.push('/spots')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder = 'First Name'
                required
                value={firstName}
                onChange={updateFirstName}>
            </input>
            <input
                type='text'
                placeholder = 'Last Name'
                required
                value={lastName}
                onChange={updateLastName}>
            </input>
            <input
                type='text'
                placeholder = 'Title'
                required
                value={title}
                onChange={updateTitle}>
            </input>
            <input
                type='text'
                placeholder = 'Body'
                required
                value={body}
                onChange={updateBody}>
            </input>
            <input
                type='text'
                placeholder = 'Address'
                required
                value={address}
                onChange={updateAddress}>
            </input>
            <input
                type='text'
                placeholder = 'State'
                required
                value={state}
                onChange={updateState}>
            </input>
            <input
                type='number'
                placeholder = 'Zip Code'
                required
                value ={zipCode}
                onChange={updateZipCode}>
            </input>
            <input
                type='text'
                placeholder = 'Photo1'
                value ={photo1}
                onChange={updatePhoto1}>
            </input>
            <input
                type='text'
                placeholder = 'Photo2'
                value={photo2}
                onChange={updatePhoto2}>
            </input>
            <input
                type='text'
                placeholder = 'Photo3'
                value ={photo3}
                onChange={updatePhoto3}>
            </input>
            <input
                type='text'
                placeholder = 'Photo4'
                value = {photo4}
                onChange={updatePhoto4}>
            </input>
            <button type="submit">Create new Spot</button>
            <button type='button' onClick={handleCancelClick}>Cancel</button>
        </form>
    )
}

export default CreateSpot;
