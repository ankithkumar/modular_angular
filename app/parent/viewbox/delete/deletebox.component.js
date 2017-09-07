export const deleteboxComponent = {
    template: `
                <button ng-click="$ctrl.deleted($ctrl.index)">delete</button>
              `,
    bindings: {
        index: '<'
    },
    controller: function () {
        let self = this;

        self.$onInit = function () {
            console.log("in checkbox component");
        }

        self.deleted = function (index) {
            console.log("clicked the ",index);
        }
    }
};