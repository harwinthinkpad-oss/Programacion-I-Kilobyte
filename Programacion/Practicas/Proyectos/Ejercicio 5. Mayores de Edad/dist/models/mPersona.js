export default class mPersona {
    _nombre;
    _edad;
    constructor(nombre, edad) {
        this._nombre = nombre;
        this._edad = edad;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set edad(edad) {
        this._edad = edad;
    }
    get edad() {
        return this._edad;
    }
}
//# sourceMappingURL=mPersona.js.map