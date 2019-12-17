export default class Wind {
  static makeWind(data) {
    const obj = new Wind();
    obj.max = data.HWS.mx;
    obj.min = data.HWS.mn;
    obj.avg = data.HWS.av;
    obj.dir = data.WD.most_common.compass_point;
    return obj;
  }
}
