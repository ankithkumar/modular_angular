import angular from "angular";

import { checkComponent } from "./checkbox/checkbox.index.js";
import { deleteComponent } from "./delete/deletebox.index";

import { viewComponent } from "./viewbox.component.js";

export const viewAria = angular
    .module("viewAria", [
        checkComponent,
        deleteComponent
    ]).
    component("viewAria", viewComponent)
    .name;