import Camera from './camera';

function getCamerasObject(cameras) {
  const camerasObject = {};
  for (let i = 0; i < cameras.length; i++) {
    camerasObject[cameras[i]] = new Camera(cameras[i]);
  }
  return camerasObject;

}


export default class Rover {
  constructor(name, cameras) {
    this.name = name;
    this.cameras = getCamerasObject(cameras);
  }
}
