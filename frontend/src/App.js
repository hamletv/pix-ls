import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import SignupFormPage from './components/SignupFormPage';
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';
import LoginFormPage from './components/LoginFormPage';
import SplashPage from './components/SplashPage/SplashPage';
import ImageList from './components/ImageList';
import AddImage from './components/AddImage';
import UpdateImage from './components/UpdateImage';
import SingleImage from './components/SingleImage';


function App() {
  const dispatch = useDispatch()
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
    <Navigation isLoaded={isLoaded} />
    {isLoaded && (
      <Switch>
        <Route exact path='/'>
          <SplashPage />
        </Route>
        <Route path='/signup'>
          <SignupFormPage />
        </Route>
        <Route path='/login'>
          <LoginFormPage />
        </Route>
        <Route path='/images/add'>
          <AddImage />
        </Route>
        <Route exact path='/images'>
          <ImageList />
        </Route>
        <Route exact path='/images/:id'>
          <SingleImage />
        </Route>
        <Route exact path='/images/:id/edit'>
          <UpdateImage />
        </Route>
        <Route>
          <h1>404: Page Not Found</h1>
        </Route>
      </Switch>
    )}
    </>
  );
}

export default App;
