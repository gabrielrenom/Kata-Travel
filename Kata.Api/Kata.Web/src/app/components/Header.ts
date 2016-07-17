
angular
  .module('app')
  .component('headerComponent', {
    templateUrl: 'app/components/Header.html',
    controller: HeaderController,
    bindings: {
      cities: '='
    }
  });
