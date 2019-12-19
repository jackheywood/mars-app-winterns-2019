import roverNames from '../../../../../enums/roverNames';
import cameraNames from '../../../../../enums/cameraNames';

export default class AboutText {
  constructor() {
    Object.values(roverNames).forEach(rover => { this[rover] = `${rover} yay`; });
    Object.values(cameraNames).forEach(camera => { this[camera] = `${camera} yay`; });
    this[roverNames.CURIOSITY] = 'Curiosity';
    this[roverNames.OPPORTUNITY] = 'Opportunity';
    this[roverNames.SPIRIT] = 'Spirit';
    this[cameraNames.CHECAM] = 'CHECAM';
    this[cameraNames.FHAZ] = 'FHAZ';
    this[cameraNames.MAHIL] = 'MAHIL';
    this[cameraNames.MARDI] = 'MARDI';
    this[cameraNames.MAST] = 'MAST';
    this[cameraNames.MINITES] = 'MINITES';
    this[cameraNames.NAVCAM] = 'NAVCAM';
    this[cameraNames.PANCAM] = 'PANCAM';
    this[cameraNames.RHAZ] = 'RHAZ';
  }
}
