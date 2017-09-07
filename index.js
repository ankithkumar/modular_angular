import angular from 'angular';

import { parentComponent } from './app/parent/parent.component.js';
import { textAria } from './app/parent/textbox/textbox.index.js';
import { viewAria } from './app/parent/viewbox/viewbox.index.js';

export const appmodule = angular
    .module('app',[
        textAria,
        viewAria
    ])
    .component('app',parentComponent)
    .name;