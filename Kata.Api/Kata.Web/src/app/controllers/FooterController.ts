/// <reference path="../typings/index.d.ts" />

class FooterController {
    filters: string[];
    filterTitles: any;
    onClearCompleted: Function;
    onShow: Function;

    constructor() {
        this.filters = [SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED];
        this.filterTitles = {
            [SHOW_ALL]: 'All',
            [SHOW_ACTIVE]: 'To be visited',
            [SHOW_COMPLETED]: 'Visited'
        };
    }

    handleClear() {
        this.onClearCompleted();
    }

    handleChange(filter: string) {
        this.onShow({ filter });
    }
}
