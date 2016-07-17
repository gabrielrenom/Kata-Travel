/// <reference path="../typings/index.d.ts" />

class CityItemController {
    editing: boolean = false;
    onSave: Function;
    onDestroy: Function;
    todo: any;
    currentCity: any;

    handleDoubleClick() {
        this.editing = true;
    }

    handleSave(text: string) {
        this.onSave({
            todo: {
                text,
                id: this.todo.id
            }
        });
        this.editing = false;
    }

    handleDestroy(id: number) {
        this.onDestroy({ id });
    }
}
