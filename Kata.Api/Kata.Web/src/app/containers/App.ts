/// <reference path="../typings/index.d.ts" />

class App {
    todos: ICity[];
    cities: ICity[];
  filter: string;

  constructor() {
      this.todos = [initialTodo];
      this.cities = [initialTodo];
    this.filter = SHOW_ALL;
  }
}

angular
  .module('app')
  .component('app', {
    templateUrl: 'app/containers/App.html',
    controller: App
  });
