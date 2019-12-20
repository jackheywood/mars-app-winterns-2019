import Camera from './camera';

function getCamerasObject(cameras) {
  const camerasObject = {};
  cameras.forEach(camera => {
    camerasObject[camera] = new Camera(camera);
  });
  return camerasObject;
}


export default class Rover {
  constructor(name, cameras) {
    this.name = name;
    this.cameras = getCamerasObject(cameras);
  }
}
