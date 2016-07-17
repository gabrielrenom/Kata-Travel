/// <reference path="../typings/index.d.ts" />
var initialTodo = {
    text: 'Hardcoded City DF.',
    completed: false,
    id: 0,
    name: 'Hardcoded City DF.',
    isVisited: false
};
var CityService = (function () {
    function CityService($resource, $http) {
        this.$resource = $resource;
        this.$http = $http;
        this.cities = [];
    }
    // it gets all the cities
    CityService.prototype.getCities = function () {
        return this.$resource('http://katawebapi.azurewebsites.net/api/city');
    };
    // it add the cities
    CityService.prototype.addCity = function (city, country, attractions) {
        // setting the resource for the post
        var controller = this.$resource('http://katawebapi.azurewebsites.net/api/city', null, {
            post: { method: 'POST' }
        });
        // executing the post
        controller.post({ name: city, country: country, attractions: attractions });
    };
    CityService.prototype.visitedCity = function (id, cities) {
        var visitedCity;
        for (var _i = 0; _i < cities.length; _i++) {
            var item = cities[_i];
            if (item.id === id) {
                item.isVisited = !item.isVisited;
                visitedCity = item;
            }
        }
        // setting the resource for the put
        var controller = this.$resource('http://katawebapi.azurewebsites.net/api/city', null, {
            put: { method: 'PUT' }
        });
        // executing the put
        controller.put({ id: visitedCity.id, name: visitedCity.name, isVisited: visitedCity.isVisited, country: visitedCity.country, attractions: visitedCity.attractions });
        return cities.map(function (city) {
            return city.id === id ?
                Object.assign({}, city, { completed: !city.completed }) :
                city;
        });
    };
    CityService.prototype.deleteTodo = function (id, todos) {
        return todos.filter(function (todo) { return todo.id !== id; });
    };
    CityService.prototype.editTodo = function (id, text, todos) {
        return todos.map(function (todo) {
            return todo.id === id ?
                Object.assign({}, todo, { text: text }) :
                todo;
        });
    };
    CityService.$inject = ['$resource'];
    return CityService;
})();
//# sourceMappingURL=CityService.js.map