//import readline from 'readline-sync';
import request from 'request';
import express from 'express';

import Weather from './Weather.js';

export function callInsight() {

  const API_KEY1 = 'XFI8MAWpQ5sKZiB3Wvw5TaUCSaxxieSkt54RmAuJ';
  const app = express();
  new Promise(function (resolve, reject) {
    
    var url = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY1}&feedtype=json&ver=1.0`;

  

    request(url, (error, response, body) => {

      let InSightData = JSON.parse(body);
      let sol_keys = body.sol_keys;
      var WeatherObj = sol_keys.map(key => new Weather(InSightData.key.First_UTC, key));
      resolve(WeatherObj);
    });

  console.log(WeatherObj);

};
