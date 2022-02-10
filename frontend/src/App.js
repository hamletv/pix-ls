import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import SignupFormPage from './components/SignupFormPage';
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';
import LoginFormPage from './components/LoginFormPage';
import SplashPage from './components/SplashPage/SplashPage';
import ImageList from './components/ImageList';

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
        <Route path='/images'>
          <ImageList />
        </Route>
        {/* <Route path='/images/:id'>
          <ImagePage />
        </Route>
        <Route path='/images/new'>
          <AddNewImage />
        </Route> */}
      </Switch>
    )}
    </>
  );
}

export default App;
