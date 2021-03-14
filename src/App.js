import React from 'react';
import './App.css';
import Navbar from './components/pages/home/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/home';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Navbar/>

      <Switch>
      	<Route path='/' exact component={Home}/>
      </Switch>

      <Footer/>

    </Router>
  );
}

export default App;
