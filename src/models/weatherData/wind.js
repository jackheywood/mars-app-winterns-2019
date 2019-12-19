export default class Wind {
  constructor(inSightWeatherData) {
    try {
      this.max = inSightWeatherData.HWS.mx;
      this.min = inSightWeatherData.HWS.mn;
      this.avg = inSightWeatherData.HWS.av;
      this.dir = inSightWeatherData.WD.most_common.compass_point;
    } catch (Exception) {
      this.max = null;
      this.min = null;
      this.avg = null;
      this.dir = null;
    }
  }
}