import temperature from './temperature';
import wind from './wind';
import pressure from './pressure';

export default class Weather {
  static makeWeather(data) {
    const obj = new Weather();
    obj.earthDate = data.First_UTC;
    obj.season = data.Season;
    obj.temp = temperature.makeTemperature(data.AT);
    obj.pressure = pressure.makePressure(data.PRE);
    obj.wind = wind.makeWind(data);

    return obj;
  }
}
