import * as angular from 'angular';
import * as ngRoute from 'angular-route';
import {coreModule} from '../core/core.module';
import { phoneDetailComponent } from './phone-detail.component';

// Define the `phoneDetail` module
export const phoneDetailModule = angular
  .module('phoneDetail', [
    ngRoute,
    coreModule
  ])
  .component('phoneDetail', phoneDetailComponent)
  .name;
