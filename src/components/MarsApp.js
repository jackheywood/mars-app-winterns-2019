import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './shared/navbar';
import HomePage from './pages/home';
import PhotosPage from './pages/Photos';
import WeatherPage from './pages/Weather';
import './MarsApp.css';

export default function MarsApp() {
  return (
    <Router>
      <div className="mars-app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/Photos" component={PhotosPage} />
          <Route path="/Weather" component={WeatherPage} />
        </Switch>
      </div>
    </Router>
  );
}
