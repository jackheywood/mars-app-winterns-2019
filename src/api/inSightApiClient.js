import request from 'request';
import Weather from '../models/weather';
import API_KEY from './apiKey';

export default function getMarsWeatherData() {
  const URL = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`;
  return new Promise((resolve, reject) => {
    request(URL, (error, response, body) => {
      if (response.statusCode !== 200) {
        reject(Error('Weather API call unsuccessful'));
      } else {
        const inSightData = JSON.parse(body);
        resolve(inSightData.sol_keys.map(solKey => new Weather(inSightData[solKey], solKey)));
      }
    });
  });
}
