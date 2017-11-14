'use strict';
import * as angular from 'angular';

import 'angular-animate';
import 'angular-resource';
import 'angular-route';
import 'angular-gettext';

import { coreModule } from './core/core.module';
import { phoneDetailModule } from 'app-ajs/phone-detail/phone-detail.module';
import { phoneListModule } from 'app-ajs/phone-list/phone-list.module';
import { configPhonecatApp } from 'app-ajs/app.config';
import { phoneAnim } from 'app-ajs/app.animations';

// Define the `phonecatApp` module
export const phonecatApp = angular.module('phonecatApp', [
  'ngAnimate',
  'ngRoute',
  coreModule,
  phoneDetailModule,
  phoneListModule,
  'gettext'
])
.config(configPhonecatApp)
.animation('.phone', phoneAnim)
.name;

