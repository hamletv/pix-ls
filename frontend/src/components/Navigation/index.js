import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import DemoUser from './DemoUser';
import ViewImages from './Images';

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {

    sessionLinks = (
      <>
        {/* <a href={`/images`}>Images</a> */}
        <NavLink exact to="/images">Images</NavLink>
        <NavLink to="/images/add"><button>Add Image</button></NavLink>
        <ProfileButton user={sessionUser} />
      </>
      );
  } else {
    sessionLinks = (
      <>
        <DemoUser />
        <LoginFormModal />
        <NavLink to="/signup"><button>Sign Up</button></NavLink>
      </>
    );
  }

  return (
    <>
      <ul>
        <li>
          <NavLink exact to="/">Home</NavLink>
          {isLoaded && sessionLinks}
        </li>
      </ul>
    </>
  );
}

export default Navigation;
