import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import AllSpotsPage from './components/AllSpotsPage'
import SpotPage from './components/SpotPage'
import CreateSpot from './components/CreateSpot'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path='/spots'>
            <AllSpotsPage />
          </Route>
          <Route path = '/spots/:id'>
            <SpotPage />
          </Route>
          <Route path='/createSpot'>
            <CreateSpot />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
