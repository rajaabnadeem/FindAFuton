import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
      <div className='container__navbar'>
          <div className = 'navbar'>
              <div className = 'navbar__links'>
                  <li>
                  <NavLink exact to="/">Home</NavLink>
                  {isLoaded && sessionLinks}
                  </li>
                  <input className = 'searchbar' type = 'text' placeholder = 'Search'></input>
              </div>
          </div>
      </div>
  );
}

export default Navigation;
