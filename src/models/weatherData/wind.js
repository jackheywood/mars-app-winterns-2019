export default class Wind {
  constructor(inSightWeatherData) {
    this.max = inSightWeatherData.HWS.mx;
    this.min = inSightWeatherData.HWS.mn;
    this.avg = inSightWeatherData.HWS.av;
    this.dir = inSightWeatherData.WD.most_common.compass_point;
  }
}
