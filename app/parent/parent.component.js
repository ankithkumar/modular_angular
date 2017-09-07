export const parentComponent = {
    template: `
                <p> this is parent </p>
                <text-aria on-update="$ctrl.addToList(list)"></text-aria>
                <br/>
                <view-aria list="$ctrl.list" on-delete="$ctrl.delete(index)" on-check="$ctrl.check(index)"></view-aria>
              `,
    controller: function () {
        let self = this;

        this.$onInit = function () {
            console.log("this is a parent component");
            self.list = [{name: "ankith", status: "ongoing"}];
        };
    }

};