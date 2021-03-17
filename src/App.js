import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from './components/site/landingPage';
import SignUp from './components/site/login/sign_up';
import Login from './components/site/login/login';

function App() {
  return (
    <Router>
      
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/sign_up' component={SignUp}/>     
        <Route exact path='/login'  component={Login}/>
      </Switch>

      

    </Router>
  );
}

export default App;
