import { htmlElement } from "../types";
export class Field {
    app : htmlElement;
    rules:any;
    constructor(app:htmlElement,rules:object) {
        this.app = app;
        this.rules = rules;
        this.createFiled ();
    }

    private createFiled () : htmlElement {
        const field = document.createElement('div');
        field.classList.add('app__field');
        this.app.insertAdjacentElement('afterbegin' , field);
        this.createBtns(field)
        return this.app
    }

    private createBtns (elem:htmlElement):void {
        for(let i = 1 ; i <= this.rules.size*this.rules.size ; i <i++){
            const btnField = document.createElement('button');
            btnField.classList.add('app__btn');
            elem.insertAdjacentElement('afterbegin' , btnField)
        }
    }
}