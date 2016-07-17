/// <reference path="../typings/index.d.ts" />

class HeaderController {
    cities: ICity[];
    listedcities: ICity[];
    public citiesService: CityService;
    /** @ngInject */
    constructor(public cityService: CityService) {
        this.citiesService = cityService;

        var obj: CityService = this.citiesService.getCities();
        obj.query((data: ICity[]) => {
            this.cities = [];
            this.listedcities = data;
            for (let item of this.listedcities) {
                this.cities.push({ id: item.id, completed: item.isVisited, text: item.name, isVisited: item.isVisited, name: item.name, country: item.country, attractions: item.attractions });
            }
        });
    }

    handleSave(name: string, country: string, attractions: string) {
        if (name.length !== 0) {

            var attractionsarray: string[] = [];

            if (attractions != null && attractions.match(' ')) {
                attractionsarray = attractions.split(' ');
            } else if (attractions != null && !attractions.match(' ')) {
                attractionsarray = [attractions];
            }

            this.cityService.addCity(name, country, attractionsarray);
            setTimeout(() => {
                var obj: CityService = this.citiesService.getCities();
                obj.query((data: ICity[]) => {
                    this.listedcities = data;
                    this.cities = [];
                    for (let item of this.listedcities) {
                        this.cities.push({ id: item.id, completed: item.isVisited, text: item.name, isVisited: item.isVisited, name: item.name, country: item.country, attractions: item.attractions });
                    }
                });
            }, 2000);
        }
    }
}
