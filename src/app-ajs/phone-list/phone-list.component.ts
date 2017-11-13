'use strict';

import * as angular from 'angular';
import * as createjs from 'createjs-module';

// Register `phoneList` component, along with its associated controller and template
class PhoneList {
  static $inject = ['Phone', 'gettextCatalog', 'gettext'];
  title: string;
  phones: any;
  orderProp: string;

  constructor(
    private Phone,
    private gettextCatalog,
    private gettext
  ) {
    this.title = gettextCatalog.getString('Hello') + ' ' + gettext('world');

    const lang = 'fr';
    this.gettextCatalog.setCurrentLanguage(lang);
    this.gettextCatalog.loadRemote(`/assets/i18n/${lang}.json`);



    console.log({createjs});
    const stage = new createjs.Stage('createjs');
    const shape = new createjs.Shape();
    shape.graphics.beginFill('red').drawRect(0, 0, 120, 120);
    stage.addChild(shape);
    stage.update();

    createjs.Sound.alternateExtensions = ['mp3'];
    createjs.Sound.registerSound('/assets/correct.ogg', 'correct');

    this.phones = Phone.query();
    this.orderProp = 'age';

  }

  zum() {
    createjs.Sound.play('correct');
  }
}

angular.
  module('phoneList').
  component('phoneList', {
    template: require('./phone-list.template.html'),
    controller: PhoneList
  });
