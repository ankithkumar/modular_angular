export const checkboxComponent = {
    template: `
                <input type="checkbox" ng-click="$ctrl.checked($ctrl.index)"/>
              `,
    bindings: {
        index: '<'
    },
    controller: function () {
        let self = this;

        self.$onInit = function () {
            console.log("in checkbox component");
        }

        self.checked = function (index) {
            console.log("clicked the ",index);
        }
    }
};