import angular from 'angular';
import { checkboxComponent } from './checkbox.component.js';

export const checkComponent = angular.
    module("checkComponent", [

    ])
    .component("checkComponent", checkboxComponent)
    .name;