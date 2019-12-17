import request from 'request';
import API_KEY from './apiKey';
import RoverPhoto from '../models/roverPhoto';

export default function photos(rover) {
  return (
    getMaxDate(rover)
      .then(maxDate => getPhotos(rover, maxDate))
  );
}

function getMaxDate(rover) {
  return new Promise(resolve => {
    const url = `https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?&api_key=${API_KEY}`;

    request(url, (error, response, body) => {
      const manifest = JSON.parse(body);
      const maxDate = manifest.photo_manifest.max_date;
      resolve(maxDate);
    });
  });
}

function getPhotos(rover, maxDate) {
  return new Promise(resolve => {
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${maxDate}&api_key=${API_KEY}`;
    request(url, (error, response, body) => {
      const photoJSONs = JSON.parse(body);
      // console.log(photoJSONs);
      const pics = photoJSONs.photos.map(photo => (
        new RoverPhoto(photo.img_src, photo.camera.full_name, photo.camera.name, rover, maxDate)
      ));
      resolve(pics);
    });
  });
}
