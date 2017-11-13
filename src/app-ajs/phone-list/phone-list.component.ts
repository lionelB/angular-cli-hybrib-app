'use strict';

import * as angular from 'angular';
import * as createjs from 'createjs-module';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    template: require('./phone-list.template.html'),
    controller: ['Phone',
      function PhoneListController(Phone) {
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

        this.zum = () => {
          createjs.Sound.play('correct');
        };
      }
    ]
  });
