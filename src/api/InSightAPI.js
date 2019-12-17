import request from 'request';
import Weather from './weather';

export default function callInSight() {
  const API_KEY = 'XFI8MAWpQ5sKZiB3Wvw5TaUCSaxxieSkt54RmAuJ';
  const URL = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`;
  return new Promise((resolve, reject) => {
    request(URL, (error, response, body) => {
      if (response.statusCode !== 200) {
        reject(Error('Weather API call unsuccessful'));
      } else {
        const inSightData = JSON.parse(body);
        const solKeys = inSightData.sol_keys;
        resolve(solKeys.map(key => new Weather(inSightData[key])));
      }
    });
  });
}


/*

Add this code to index.js to debug

import callInsight from './api/insightAPI';
callInSight().then(objects => console.log(objects));

*/
