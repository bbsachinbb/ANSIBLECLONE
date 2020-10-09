import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Home from './Home';
import Overview from './Overview';
import Navbar from './Navbar';
import Belowbody from './belowbody';
import Cards from './cards';
function App() {
  return (
    <>
      <Navbar />
      <Belowbody />
      <Cards />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/overview" component={Overview} />
        <Route exact path="/overview" component={Overview} />
        <Route exact path="/overview" component={Overview} />
        <Route exact path="/overview" component={Overview} />
        <Redirect to="/" />
      </Switch>
     
    </>
  );
}

export default App;
