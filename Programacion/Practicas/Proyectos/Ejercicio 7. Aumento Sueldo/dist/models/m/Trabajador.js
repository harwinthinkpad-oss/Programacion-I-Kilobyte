export default class Trabajador {
    _nombre;
    _tipo;
    _sueldo;
    _antiguedad;
    constructor(nombre, tipo, sueldo, antiguedad) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.sueldo = sueldo;
        this.antiguedad = antiguedad;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set tipo(tipo) {
        if (tipo !== 1 && tipo !== 2) {
            throw new RangeError("El tipo de trabajador debe ser 1 (obrero) o 2 (administrativo).");
        }
        this._tipo = tipo;
    }
    get tipo() {
        return this._tipo;
    }
    set sueldo(sueldo) {
        this._sueldo = +sueldo;
    }
    get sueldo() {
        return this._sueldo;
    }
    set antiguedad(antiguedad) {
        this._antiguedad = +antiguedad;
    }
    get antiguedad() {
        return this._antiguedad;
    }
    aumento() {
        return this._sueldo * (this._tipo === 1 ? 0.2 : 0.1);
    }
}
//# sourceMappingURL=Trabajador.js.map