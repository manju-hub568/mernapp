import React, { createContext, useReducer } from 'react';
import Navbar from './navbar';
import Admin from './Admin';
import Home from './Home';
import Register from './Register';
import Contact from './Contact.js';
import Logout from './Logout';
import About from './About';
import {Switch, Route, Redirect} from 'react-router-dom';
import './css/style.css';

import {initialState, reducer} from '../src/reducer/UseReducer';

const usercontext = createContext();

export default function App () {

  const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
        <usercontext.Provider value = {{state, dispatch}}>
        <Navbar />
        <Switch>
                <Route exact path='/' component = {Home} />
                <Route exact path='/admin' component = {Admin} />
                <Route exact path='/register' component = {Register} />
                <Route exact path='/contact' component = {Contact} />
                <Route exact path='/logout' component = {Logout} />
                <Route exact path='/about' component = {About} />
          </Switch>  
          </usercontext.Provider>
        </>
    );
}

export {usercontext};