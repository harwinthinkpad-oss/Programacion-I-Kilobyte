export default class mPersona {
    _nombre = "";
    _ingresos = 0;
    constructor({ nombre, ingresos, }) {
        this.nombre = nombre;
        this.ingresos = ingresos;
    }
    set nombre(nombre) {
        this._nombre = nombre.trim();
    }
    get nombre() {
        return this._nombre;
    }
    set ingresos(ingresos) {
        this._ingresos = +ingresos;
    }
    get ingresos() {
        return this._ingresos;
    }
}
//# sourceMappingURL=mPersona.js.map