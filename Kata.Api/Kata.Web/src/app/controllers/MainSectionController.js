/// <reference path="../typings/index.d.ts" />
var MainSectionController = (function () {
    /** @ngInject */
    function MainSectionController(cityService) {
        this.cityService = cityService;
        this.selectedFilter = visibilityFilters[this.filter];
        this.completeReducer = function (count, city) { return city.completed ? count + 1 : count; };
    }
    MainSectionController.prototype.handleClearCompleted = function () {
    };
    MainSectionController.prototype.handleCompleteAll = function () {
    };
    MainSectionController.prototype.handleShow = function (filter) {
        this.filter = filter;
        this.selectedFilter = visibilityFilters[filter];
    };
    MainSectionController.prototype.handleChange = function (id) {
        this.cities = this.cityService.visitedCity(id, this.cities);
    };
    MainSectionController.prototype.handleSave = function (e) {
        if (e.text.length === 0) {
            this.cities = this.cityService.deleteTodo(e.id, this.cities);
        }
        else {
            this.cities = this.cityService.editTodo(e.id, e.text, this.cities);
        }
    };
    MainSectionController.prototype.handleDestroy = function (e) {
        this.cities = this.cityService.deleteTodo(e, this.cities);
    };
    return MainSectionController;
})();
//# sourceMappingURL=MainSectionController.js.map