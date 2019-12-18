export default class Temperature {
  constructor(inSightTemperatureData) {
    this.max = inSightTemperatureData.mx;
    this.min = inSightTemperatureData.mn;
    this.avg = inSightTemperatureData.av;
  }
}
