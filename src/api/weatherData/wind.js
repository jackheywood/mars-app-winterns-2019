export default class Wind {
  constructor(data) {
    this.max = data.HWS.mx;
    this.min = data.HWS.mn;
    this.avg = data.HWS.av;
    this.dir = data.WD.most_common.compass_point;
  }
}
