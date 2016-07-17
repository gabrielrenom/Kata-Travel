/// <reference path="../typings/index.d.ts" />
var HeaderController = (function () {
    /** @ngInject */
    function HeaderController(cityService) {
        var _this = this;
        this.cityService = cityService;
        this.citiesService = cityService;
        var obj = this.citiesService.getCities();
        obj.query(function (data) {
            _this.cities = [];
            _this.listedcities = data;
            for (var _i = 0, _a = _this.listedcities; _i < _a.length; _i++) {
                var item = _a[_i];
                _this.cities.push({ id: item.id, completed: item.isVisited, text: item.name, isVisited: item.isVisited, name: item.name, country: item.country, attractions: item.attractions });
            }
        });
    }
    HeaderController.prototype.handleSave = function (name, country, attractions) {
        var _this = this;
        if (name.length !== 0) {
            var attractionsarray = [];
            if (attractions != null && attractions.match(' ')) {
                attractionsarray = attractions.split(' ');
            }
            else if (attractions != null && !attractions.match(' ')) {
                attractionsarray = [attractions];
            }
            this.cityService.addCity(name, country, attractionsarray);
            setTimeout(function () {
                var obj = _this.citiesService.getCities();
                obj.query(function (data) {
                    _this.listedcities = data;
                    _this.cities = [];
                    for (var _i = 0, _a = _this.listedcities; _i < _a.length; _i++) {
                        var item = _a[_i];
                        _this.cities.push({ id: item.id, completed: item.isVisited, text: item.name, isVisited: item.isVisited, name: item.name, country: item.country, attractions: item.attractions });
                    }
                });
            }, 2000);
        }
    };
    return HeaderController;
})();
//# sourceMappingURL=HeaderController.js.map