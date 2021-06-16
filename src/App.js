// import logo from './logo.svg';
// import React, { useEffect, useState } from 'react';
import '../src/sass/app.scss'
import Home from './containers/Home'
import Dashboard from './containers/Dashboard'
import {
    BrowserRouter,
    Switch,
    Route,
  } from "react-router-dom";
function App() {


    return (
        <BrowserRouter>
                <Switch>
                  <Route exact path={`/`}>
                      <Home />
                  </Route>
                  
                  <Route exact path={`/dashboard`}>
                      <Dashboard />
                  </Route>
                </Switch>
            </BrowserRouter>
   );
}

export default App;
