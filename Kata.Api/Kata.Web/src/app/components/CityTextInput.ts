

angular
  .module('app')
  .component('cityTextInput', {
    templateUrl: 'app/components/CityTextInput.html',
    controller: CityTextInputController,
    bindings: {
      onSave: '&',
      placeholder: '@',
      newTodo: '@',
      editing: '@',
      name: '<',
      country: '<',
      attractions:'<'
    }
  });
