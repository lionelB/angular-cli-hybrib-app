'use strict';
import * as angular from 'angular';

import 'angular-animate';
import 'angular-resource';
import 'angular-route';
import 'angular-gettext';

import './core/core.module';
import './phone-detail/phone-detail.module';
import './phone-list/phone-list.module';

// Define the `phonecatApp` module
export const phonecatApp = angular.module('phonecatApp', [
  'ngAnimate',
  'ngRoute',
  'core',
  'phoneDetail',
  'phoneList',
  'gettext'
]).name;

