import Camera from './camera';

export default class Rover {
  constructor(name, cameras) {
    this.name = name;
    this.cameras = cameras.map(camName => new Camera(camName));
  }
}
