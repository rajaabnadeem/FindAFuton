import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, NavLink } from 'react-router-dom'
import { getSpots } from '../../store/spotReducer.js'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import Carousel from 'react-img-carousel';
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
                <div className = 'header'>
                    <input className = 'main__searchbar' type = 'text' placeholder = 'Where are you going?'></input>
                </div>
                <div className ='header__top'>
                    <div className = 'logo'>Find a Futon</div>
                    <div className = 'stay'>Places to Stay</div>
                    <NavLink className = 'host' to = '/createSpot'>Become a Host</NavLink>
                </div>
                <div className = 'header__bottom'>Find your next couch to surf</div>
            </div>
            <div className = 'container__spots'>
                {/* <input type='file' /> */}
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
                            <div className= 'container__carousel'>
                            {/* <CarouselProvider
                            naturalSlideWidth={100}
                            naturalSlideHeight={300}
                            totalSlides={4}
                            >
                                <Slider index={0}>
                                    <Image src = {spot.photo1} />
                                    <Image src = {spot.photo2} />
                                    <Image src = {spot.photo3} />
                                    <Image src = {spot.photo4} />
                                </Slider>

                                <ButtonBack>Back</ButtonBack>
                                <ButtonNext>Next</ButtonNext>
                            </CarouselProvider> */}



                                <img src={spot.photo1}></img>
                                <img src={spot.photo2}></img>
                                <img src={spot.photo3}></img>
                                <img src={spot.photo4}></img>
                            </div>
                        </div>
                    </div>
                 ))}
            </div>
        </div>
    )
}
export default SpotPage
