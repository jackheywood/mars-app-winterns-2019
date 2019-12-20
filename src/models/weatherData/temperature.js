export default class Temperature {
  constructor(inSightTemperatureData) {
    try {
      this.max = inSightTemperatureData.mx;
      this.min = inSightTemperatureData.mn;
      this.avg = inSightTemperatureData.av;
    } catch (e) {
      this.max = null;
      this.min = null;
      this.avg = null;
    }
  }
}
