import React from 'react';
import './App.css';

import home from './pages/home';
import blog from './pages/blog';
import sigblog from './pages/singleblog';
import login from './pages/loginsign';
import register from './pages/register';
import { Switch, Route, Router } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Switch>
        <Route exact path="/" component={home} />
        <Route exact path="/rooms/" component={blog} />
        <Route exact path="/rooms/:slug" component={sigblog} />
        <Route exact path="/login" component={login} />
        <Route exact path="/register" component={register} />
        <Router component={Error} />
    </Switch>
    </>
  );
}

export default App;
