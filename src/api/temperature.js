export default class Temperature {
  static makeTemperature(data) {
    const obj = new Temperature();
    obj.max = data.mx;
    obj.min = data.mn;
    obj.avg = data.av;
    return obj;
  }
}
