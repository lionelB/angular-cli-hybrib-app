import * as angular from 'angular';
import * as ngRessource from 'angular-resource';
import { PhoneFactory } from './phone.service';

// Define the `core.phone` module
export const corePhoneModule = angular
  .module('core.phone', [ngRessource])
  .factory('Phone', PhoneFactory )
  .name;
