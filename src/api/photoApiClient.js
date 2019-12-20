import request from 'request';
import API_KEY from './apiKey';
import RoverPhoto from '../models/roverPhoto';
import Rover from '../models/rover';
import roverNames from '../enums/roverNames';
import cameraNames from '../enums/cameraNames';

export default function getPhotos() {
  const curiosityCameras = [cameraNames.FHAZ, cameraNames.RHAZ, cameraNames.MAST, cameraNames.CHEMCAM, cameraNames.MAHLI, cameraNames.MARDI, cameraNames.NAVCAM];
  const spiritCameras = [cameraNames.FHAZ, cameraNames.RHAZ, cameraNames.NAVCAM, cameraNames.PANCAM, cameraNames.MINITES];
  const opportunityCameras = [cameraNames.FHAZ, cameraNames.RHAZ, cameraNames.NAVCAM, cameraNames.PANCAM, cameraNames.MINITES];

  const rovers = {
    [roverNames.CURIOSITY]: new Rover(roverNames.CURIOSITY, curiosityCameras),
    [roverNames.SPIRIT]: new Rover(roverNames.SPIRIT, spiritCameras),
    [roverNames.OPPORTUNITY]: new Rover(roverNames.OPPORTUNITY, opportunityCameras),
  };

  const roverPromisesObject = Object.keys(rovers).map(rover => (
    getManifest(rover)
      .then(manifest => getSols(manifest, rovers[rover]))
      .then(() => getAllRoverPhotos(rovers[rover]))));

  return Promise.all(roverPromisesObject)
    .then(() => rovers);
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
  Object.keys(rover.cameras).forEach(camera => {
    let maxSol;
    const photoManifest = manifest.photo_manifest.photos;

    let i = photoManifest.length;
    while (!maxSol && i > 0) {
      i -= 1;
      maxSol = photoManifest[i].cameras.includes(rover.cameras[camera].shortName) ? photoManifest[i].sol : null;
    }
    rover.cameras[camera].maxSol = maxSol;
  });
}

function getAllRoverPhotos(rover) {
  const roverPromises = [];

  Object.keys(rover.cameras).forEach(camera => {
    roverPromises.push(new Promise((resolve, reject) => {
      const sol = rover.cameras[camera].maxSol;
      const cameraShortName = rover.cameras[camera].shortName;
      const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover.name}/photos?sol=${sol}&camera=${cameraShortName}&api_key=${API_KEY}`;
      request(url, (error, response, body) => {
        if (response.statusCode !== 200) {
          reject(Error(`failed to get data from the camera ${cameraShortName} on ${rover} on sol ${sol}`));
        } else {
          const photoJSONs = JSON.parse(body);
          const photosArray = photoJSONs.photos.map(photo => new RoverPhoto(photo.img_src, photo.earth_date));
          photosArray.forEach(photo => rover.cameras[camera].photos.push(photo));
          resolve();
        }
      });
    }));
  });

  return Promise.all(roverPromises)
    .then(() => rover);
}
