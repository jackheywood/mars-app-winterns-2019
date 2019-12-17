export default class Pressure {
  static makePressure(data) {
    const obj = new Pressure();
    obj.max = data.mx;
    obj.min = data.mn;
    obj.avg = data.av;
    return obj;
  }
}
