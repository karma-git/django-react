import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navigation/Navbar';
import CategoryDetail from './components/Category/CategoryDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return ( 
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/category/:id/" exact component={CategoryDetail}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
