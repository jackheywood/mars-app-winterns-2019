import Weather from '../models/weather';
import fullWeatherDummyData from './fullWeatherDummyData';

export default function getMarsWeatherDataDummy() {
  return new Promise(resolve => {
    // fullWeatherDummyData = JSON.parse(fullWeatherDummyData);
    resolve(fullWeatherDummyData.sol_keys.map(solKey => new Weather(fullWeatherDummyData[solKey], solKey)));
  });
}
