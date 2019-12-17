import Temperature from './weatherData/temperature';
import Wind from './weatherData/wind';
import Pressure from './weatherData/pressure';

export default class Weather {
  constructor(inSightWeatherData) {
    this.earthDate = inSightWeatherData.First_UTC;
    this.season = inSightWeatherData.Season;
    this.temp = new Temperature(inSightWeatherData.AT);
    this.pressure = new Pressure(inSightWeatherData.PRE);
    this.wind = new Wind(inSightWeatherData);
  }
}
