// import readline from 'readline-sync';
import request from 'request';
import Weather from './Weather';

export default function callInsight() {
  const API_KEY1 = 'XFI8MAWpQ5sKZiB3Wvw5TaUCSaxxieSkt54RmAuJ';
  const URL = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY1}&feedtype=json&ver=1.0`;
  return new Promise((resolve, reject) => {
    request(URL, (error, response, body) => {
      if (response.statusCode !== 200) {
        reject(Error());
      } else {
        const inSightData = JSON.parse(body);
        const solKeys = inSightData.sol_keys;
        resolve(solKeys.map(key => Weather.makeWeather(inSightData[key])));
      }
    });
  });
}
