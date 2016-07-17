/// <reference path="../typings/index.d.ts" />

class CityTextInputController {
    editing: boolean;
    name: string;
    country: string;
    newTodo: boolean;
    attractions: string;
    onSave: Function;

    /** @ngInject */
    constructor(public cityService: CityService, public $window: any, public $timeout: any) {
        this.editing = this.editing || false;
        this.name = this.name || '';
        if (this.name.length) {
            this.focus();
        }
    }

    handleBlur() {
        if (!this.newTodo) {
            this.onSave({ name: this.name, country: this.country, attractions: this.attractions });
        }
    }

    handleSubmit(e: any) {
        if (e.keyCode === 13) {
            this.onSave({ name: this.name, country: this.country, attractions: this.attractions });
            if (this.newTodo) {
                this.name = '';
                this.country = '';
                this.attractions = '';
            }
        }
    }

    focus() {
        this.$timeout(() => {
            const element = this.$window.document.querySelector('.editing .textInput');
            if (element) {
                element.focus();
            }
        }, 0);
    }
}
