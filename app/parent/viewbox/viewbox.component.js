export const viewComponent = {
    template:  `
                 <p> this is view Component</p>
                 <div ng-repeat="list in $ctrl.list">
                    <check-component index="$index"></check-component>
                    <div>{{ list.name }} {{ list.status }}</div>
                    <delete-component></delete-component>
                 </div>
                `,
    bindings: {
        list: '<',
        onChange: '&',
        onDelete: '&'
    },
    controller: function () {
        let self = this;

        self.$onInit = function () {
            console.log("In view component");
        }
    }
};