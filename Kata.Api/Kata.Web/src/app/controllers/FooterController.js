/// <reference path="../typings/index.d.ts" />
var FooterController = (function () {
    function FooterController() {
        this.filters = [SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED];
        this.filterTitles = (_a = {},
            _a[SHOW_ALL] = 'All',
            _a[SHOW_ACTIVE] = 'To be visited',
            _a[SHOW_COMPLETED] = 'Visited',
            _a
        );
        var _a;
    }
    FooterController.prototype.handleClear = function () {
        this.onClearCompleted();
    };
    FooterController.prototype.handleChange = function (filter) {
        this.onShow({ filter: filter });
    };
    return FooterController;
})();
//# sourceMappingURL=FooterController.js.map