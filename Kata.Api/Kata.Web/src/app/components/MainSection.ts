
angular
  .module('app')
  .component('mainSection', {
    templateUrl: 'app/components/MainSection.html',
    controller: MainSectionController,
    bindings: {
      cities: '=',
      filter: '<'
    }
  });
