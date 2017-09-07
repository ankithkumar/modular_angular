import angular from 'angular';

import { textComponent } from './textbox.component.js';

export const textAria = angular
    .module('textAria', [

    ])
    .component("textAria",textComponent)
    .name;