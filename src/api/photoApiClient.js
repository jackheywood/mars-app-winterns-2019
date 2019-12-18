import request from 'request';
import API_KEY from './apiKey';
import RoverPhoto from '../models/roverPhoto';
import Rover from '../models/rover';

export default function photos() {
  const curiosityCameras = ['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 'MARDI', 'NAVCAM'];
  const spiritCameras = ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'];
  const opportunityCameras = ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'];

  const rovers = [new Rover('curiosity', curiosityCameras),
    new Rover('spirit', spiritCameras),
    new Rover('opportunity', opportunityCameras)];

  const output = rovers.map(rover =>
    getManifest(rover.name)
      .then(manifest => getSols(manifest, rover))
      .then(sols => getPhotos(rover, sols)));

  return output;
}


function getManifest(rover) {
  return new Promise((resolve, reject) => {

    const url = `https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?&api_key=${API_KEY}`;

    request(url, (error, response, body) => {

      if (response.statusCode !== 200) {
        reject(Error, 'error');
      } else {
        const manifest = JSON.parse(body);
        resolve(manifest);
      }
    });
  });
}

function getSols(manifest, rover) {
  return new Promise(resolve => {
    const sols = rover.cameras.map(camera => {
      let maxSol;
      let i = manifest.photo_manifest.photos.length;
      while (!maxSol && i > 0) {
        i -= 1;
        maxSol = manifest.photo_manifest.photos[i].cameras.includes(camera.shortName) ? manifest.photo_manifest.photos[i].sol : null;
      }
      return maxSol;
    });
    resolve(sols);
  });
}


function getPhotos(rover, sols) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < rover.cameras.length; i++) {
      const sol = sols[i];
      const camera = rover.cameras[i].shortName;
      const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover.name}/photos?sol=${sol}&camera=${camera}&api_key=${API_KEY}`;
      request(url, (error, response, body) => {
        if (response.statusCode !== 200) {
          reject(Error, 'error');
        } else {
          const photoJSONs = JSON.parse(body);
  g        const photosArray = photoJSONs.photos.map(photo => new RoverPhoto(photo.img_src, photo.earth_date));
          rover.cameras[i].photos.push(photosArray);
        }
      });
    }
    resolve(rover);
  });
}
