
interface ICityService {
    getCities(): ng.resource.IResourceClass<any>;
    addCity(city: string, country: string, attractions: string[]);
    visitedCity(id: number, cities: ICity[]);
}
