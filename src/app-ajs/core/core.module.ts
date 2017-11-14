import * as angular from 'angular';
import { corePhoneModule } from './phone/phone.module';
import { checkmarkFilter } from './checkmark/checkmark.filter';
// Define the `core` module
export const coreModule = angular
  .module('core', [corePhoneModule])
  .filter('checkmark', checkmarkFilter)
  .name;


