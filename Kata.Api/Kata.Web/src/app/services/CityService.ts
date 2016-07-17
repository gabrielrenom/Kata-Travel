/// <reference path="../typings/index.d.ts" />

const initialTodo: ICity = {
  text: 'Hardcoded City DF.',
  completed: false,
  id: 0,
  name: 'Hardcoded City DF.',
  isVisited: false
};

class CityService implements ICityService{
    static $inject = ['$resource'];
    private cities: ICity[];

    constructor(private $resource: ng.resource.IResourceService, private $http: ng.IHttpService) {
        this.cities = [];
    }

    // it gets all the cities
    public getCities(): ng.resource.IResourceClass<any> {
        return this.$resource('http://katawebapi.azurewebsites.net/api/city');
    }

    // it add the cities
    public addCity(city: string, country:string, attractions:string[]){        
  
        // setting the resource for the post
        var controller = <ng.resource.IResourceClass>this.$resource('http://katawebapi.azurewebsites.net/api/city', null, {            
            post: { method: 'POST' }        
        });
        
        // executing the post
        controller.post({ name: city, country: country ,attractions:attractions });     
  }

    public visitedCity(id: number, cities: ICity[]) {

        var visitedCity: ICity;       
        
        for (let item of cities)
        {
            if (item.id === id) {
                item.isVisited = !item.isVisited;
                visitedCity = item;
            }
        }

        // setting the resource for the put
        var controller = <ng.resource.IResourceClass>this.$resource('http://katawebapi.azurewebsites.net/api/city', null, {
            put: { method: 'PUT' }
        });

        // executing the put
        controller.put({ id:visitedCity.id, name: visitedCity.name, isVisited: visitedCity.isVisited,  country: visitedCity.country, attractions: visitedCity.attractions });

        return cities.map(city => {
        return city.id === id ?
        Object.assign({}, city, {completed: !city.completed}) :
        city;
     });
  }

  deleteTodo(id: number, todos: ICity[]) {
    return todos.filter(todo => todo.id !== id);
  }

  editTodo(id: number, text: string, todos: ICity[]) {
    return todos.map(todo => {
      return todo.id === id ?
        Object.assign({}, todo, {text}) :
        todo;
    });
  }

  // completeAll(todos: ICity[]) {


  //  const areAllMarked = todos.every(todo => todo.completed);
  //  return todos.map(todo => Object.assign({}, todo, {completed: !areAllMarked}));
  // }

  // clearCompleted(todos: ICity[]) {
  //  return todos.filter(todo => {
  //    return todo.completed === false;
  //  });
  // }
}

