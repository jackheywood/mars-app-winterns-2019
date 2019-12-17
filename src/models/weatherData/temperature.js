export default class Temperature {
  constructor(data) {
    this.max = data.mx;
    this.min = data.mn;
    this.avg = data.av;
  }
}
