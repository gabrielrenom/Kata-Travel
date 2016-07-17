/// <reference path="../typings/index.d.ts" />
var CityTextInputController = (function () {
    /** @ngInject */
    function CityTextInputController(cityService, $window, $timeout) {
        this.cityService = cityService;
        this.$window = $window;
        this.$timeout = $timeout;
        this.editing = this.editing || false;
        this.name = this.name || '';
        if (this.name.length) {
            this.focus();
        }
    }
    CityTextInputController.prototype.handleBlur = function () {
        if (!this.newTodo) {
            this.onSave({ name: this.name, country: this.country, attractions: this.attractions });
        }
    };
    CityTextInputController.prototype.handleSubmit = function (e) {
        if (e.keyCode === 13) {
            this.onSave({ name: this.name, country: this.country, attractions: this.attractions });
            if (this.newTodo) {
                this.name = '';
                this.country = '';
                this.attractions = '';
            }
        }
    };
    CityTextInputController.prototype.focus = function () {
        var _this = this;
        this.$timeout(function () {
            var element = _this.$window.document.querySelector('.editing .textInput');
            if (element) {
                element.focus();
            }
        }, 0);
    };
    return CityTextInputController;
})();
//# sourceMappingURL=CityTextInputController.js.map