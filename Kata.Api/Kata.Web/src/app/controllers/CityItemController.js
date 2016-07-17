/// <reference path="../typings/index.d.ts" />
var CityItemController = (function () {
    function CityItemController() {
        this.editing = false;
    }
    CityItemController.prototype.handleDoubleClick = function () {
        this.editing = true;
    };
    CityItemController.prototype.handleSave = function (text) {
        this.onSave({
            todo: {
                text: text,
                id: this.todo.id
            }
        });
        this.editing = false;
    };
    CityItemController.prototype.handleDestroy = function (id) {
        this.onDestroy({ id: id });
    };
    return CityItemController;
})();
//# sourceMappingURL=CityItemController.js.map