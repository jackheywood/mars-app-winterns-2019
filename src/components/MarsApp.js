import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './shared/navbar';
import HomePage from './pages/home';
import ExamplePage from './pages/example';
import './MarsApp.css';

export default function MarsApp() {
  return (
    <Router>
      <div className="mars-app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/example" component={ExamplePage} />
        </Switch>
      </div>
    </Router>
  );
}
