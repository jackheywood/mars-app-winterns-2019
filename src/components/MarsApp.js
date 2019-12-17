import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './shared/navbar';
import HomePage from './pages/home';
import PhotosPage from './pages/photos';
import WeatherPage from './pages/weather';
import './MarsApp.css';

export default function MarsApp() {
  return (
    <Router>
      <div className="mars-app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/photos" component={PhotosPage} />
          <Route path="/weather" component={WeatherPage} />
        </Switch>
      </div>
    </Router>
  );
}
