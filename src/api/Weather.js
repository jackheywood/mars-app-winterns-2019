import Temperature from './weatherData/temperature';
import Wind from './weatherData/wind';
import Pressure from './weatherData/pressure';

export default class Weather {
  constructor(data) {
    this.earthDate = data.First_UTC;
    this.season = data.Season;
    this.temp = new Temperature(data.AT);
    this.pressure = new Pressure(data.PRE);
    this.wind = new Wind(data);
  }
}
