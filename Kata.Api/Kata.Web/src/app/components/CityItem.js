angular
    .module('app')
    .component('cityItem', {
    templateUrl: 'app/components/CityItem.html',
    controller: CityItemController,
    bindings: {
        todo: '<',
        currentCity: '<',
        onDestroy: '&',
        onChange: '&',
        onSave: '&'
    }
});
//# sourceMappingURL=CityItem.js.map