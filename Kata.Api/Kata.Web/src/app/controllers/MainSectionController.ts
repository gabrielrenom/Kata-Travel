/// <reference path="../typings/index.d.ts" />

class MainSectionController {
    selectedFilter: Function;
    filter: string;
    completeReducer: Function;
    cities: ICity[];

    /** @ngInject */
    constructor(public cityService: CityService) {
        this.selectedFilter = visibilityFilters[this.filter];
        this.completeReducer = (count: number, city: ICity): number => city.completed ? count + 1 : count;
    }

    handleClearCompleted() {
    }

    handleCompleteAll() {
    }

    handleShow(filter: string) {
        this.filter = filter;
        this.selectedFilter = visibilityFilters[filter];
    }

    handleChange(id: number) {
        this.cities = this.cityService.visitedCity(id, this.cities);
    }

    handleSave(e: any) {
        if (e.text.length === 0) {
            this.cities = this.cityService.deleteTodo(e.id, this.cities);
        } else {
            this.cities = this.cityService.editTodo(e.id, e.text, this.cities);
        }
    }

    handleDestroy(e: any) {
        this.cities = this.cityService.deleteTodo(e, this.cities);
    }
}
