import roverNames from './roverNames';
import cameraNames from './cameraNames';

const roverCameras = {
  [roverNames.CURIOSITY]: [cameraNames.FHAZ, cameraNames.RHAZ, cameraNames.MAST, cameraNames.CHEMCAM, cameraNames.MAHLI, cameraNames.MARDI, cameraNames.NAVCAM],
  [roverNames.SPIRIT]: [cameraNames.FHAZ, cameraNames.RHAZ, cameraNames.NAVCAM, cameraNames.PANCAM, cameraNames.MINITES],
  [roverNames.OPPORTUNITY]: [cameraNames.FHAZ, cameraNames.RHAZ, cameraNames.NAVCAM, cameraNames.PANCAM, cameraNames.MINITES],
};

export default roverCameras;
