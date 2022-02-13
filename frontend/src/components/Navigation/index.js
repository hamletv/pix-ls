import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
// import './Navigation.css';
import DemoUser from './DemoUser';
import ViewImages from './Images';


const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {

    sessionLinks = (
      <>
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
      <nav>
        <div>
          <img src='../../../public/images/pix-ls_logo.jpeg' />
        </div>
        <ul>
          <li>
            <NavLink exact to="/">Home</NavLink>
            {isLoaded && sessionLinks}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
