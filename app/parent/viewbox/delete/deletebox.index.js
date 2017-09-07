import angular from 'angular';

import { deleteboxComponent } from './deletebox.component.js';

export const deleteComponent = angular
    .module("deleteComponent", [

    ])
    .component("deleteComponent", deleteboxComponent)
    .name;