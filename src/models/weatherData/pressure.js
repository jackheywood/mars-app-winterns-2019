export default class Pressure {
  constructor(inSightPressureData) {
    try {
      this.max = inSightPressureData.mx;
      this.min = inSightPressureData.mn;
      this.avg = inSightPressureData.av;
    } catch (Exception) {
      this.max = null;
      this.min = null;
      this.avg = null;
    }
  }
}
