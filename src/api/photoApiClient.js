import request from 'request';
import API_KEY from './apiKey';
import RoverPhoto from '../models/roverPhoto';
import Rover from '../models/rover';

export default function getPhotos() {
  const curiosityCameras = ['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 'MARDI', 'NAVCAM'];
  const spiritCameras = ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'];
  const opportunityCameras = ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'];

  const rovers = [
    new Rover('curiosity', curiosityCameras),
    new Rover('spirit', spiritCameras),
    new Rover('opportunity', opportunityCameras),
  ];

  const roverPromisesArray = rovers.map(rover =>
    getManifest(rover.name)
      .then(manifest => getSols(manifest, rover))
      .then(sols => getAllRoverPhotos(rover, sols)));

  return Promise.all(roverPromisesArray);
}


function getManifest(rover) {
  return new Promise((resolve, reject) => {
    const url = `https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?&api_key=${API_KEY}`;

    request(url, (error, response, body) => {
      if (response.statusCode !== 200) {
        reject(Error(`failed to get manifest from ${rover}`));
      } else {
        const manifest = JSON.parse(body);
        resolve(manifest);
      }
    });
  });
}

function getSols(manifest, rover) {
  const sols = rover.cameras.map(camera => {
    let maxSol;
    const photoManifest = manifest.photo_manifest.photos;
    let i = photoManifest.length;
    while (!maxSol && i > 0) {
      i -= 1;
      maxSol = photoManifest[i].cameras.includes(camera.shortName) ? photoManifest[i].sol : null;
    }
    return maxSol;
  });
  return sols;
}


function getAllRoverPhotos(rover, sols) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < rover.cameras.length; i++) {
      const sol = sols[i];
      const camera = rover.cameras[i].shortName;
      const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover.name}/photos?sol=${sol}&camera=${camera}&api_key=${API_KEY}`;
      request(url, (error, response, body) => {
        if (response.statusCode !== 200) {
          reject(Error(`failed to get data from the camera ${camera} on ${rover} on sol ${sol}`));
        } else {
          const photoJSONs = JSON.parse(body);
          const photosArray = photoJSONs.photos.map(photo => new RoverPhoto(photo.img_src, photo.earth_date));
          rover.cameras[i].photos.push(photosArray);
        }
      });
    }
    resolve(rover);
  });
}
