/** @module Bar */

export class Bar {
    _name;
    length;
    constructor(name){
        this.name = name;
    }

    get name(){
        return this._name
    }

    set name(name){
        this.length = name.length;
        this._name = name;
    }
}