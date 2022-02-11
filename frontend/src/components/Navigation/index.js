import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import DemoUser from './DemoUser';

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <DemoUser />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <>
      <div>
        <img src='../public/images/pix-ls_logo.jpeg'/>
      </div>
      <ul>
        <li>
          <NavLink exact to="/">Home</NavLink>
          <NavLink exact to="/images">Images</NavLink>
          {isLoaded && sessionLinks}
        </li>
      </ul>
    </>
  );
}

export default Navigation;
