import request from 'request';
import Weather from '../models/weather';
import API_KEY from './apiKey';
import fullWeatherDummyData from './fullWeatherDummyData';

export default function getMarsWeatherDataDummy() {
  return new Promise((resolve, reject) => {
    // fullWeatherDummyData = JSON.parse(fullWeatherDummyData);
    resolve(fullWeatherDummyData.sol_keys.map(solKey => new Weather(fullWeatherDummyData[solKey], solKey)));
  });
}
