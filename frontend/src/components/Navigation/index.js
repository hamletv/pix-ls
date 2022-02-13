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
      <ul>
        <li>
          <NavLink exact to="/images">Images</NavLink>
        </li>
        <li>
          <NavLink to="/images/add"><button className='function-button'>Add Image</button></NavLink>
        </li>
        <li>
          <ProfileButton user={sessionUser} />
        </li>
      </ul>
      </>
      );
  } else {
    sessionLinks = (
      <>
        <div className='right-nav'>
          <ul>
            <li>
              <DemoUser />
            </li>
            <li>
              <LoginFormModal />
            </li>
            <li>
              <NavLink to="/signup"><button className='function-button'>Sign Up</button></NavLink>
            </li>
          </ul>
        </div>
      </>
    );
  }

  return (
    <>
      <nav className='header'>
        <div className='left-nav'>
            <li>
              <NavLink exact to="/" className='app-name'>PIX-LS</NavLink>
            </li>
        </div>
        <div className='right-nav'>
          <ul>
            <li>
              {isLoaded && sessionLinks}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
