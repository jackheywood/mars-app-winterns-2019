export default class Pressure {
  constructor(inSightPressureData) {
    this.max = inSightPressureData.mx;
    this.min = inSightPressureData.mn;
    this.avg = inSightPressureData.av;
  }
}
