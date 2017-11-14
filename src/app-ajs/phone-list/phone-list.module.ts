import * as angular from 'angular';
import * as ngGettext from 'angular-gettext';

import {coreModule} from '../core/core.module';
import { PhoneListComponent } from './phone-list.component';


// Define the `phoneList` module
export const phoneListModule = angular
  .module('phoneList', [coreModule, ngGettext])
  .component('phoneList', PhoneListComponent)
  .name;

