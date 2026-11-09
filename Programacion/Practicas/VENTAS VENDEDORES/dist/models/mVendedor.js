export default class mVendedor {
    constructor({ nombre, montoVenta }) {
        this._nombre = nombre;
        this._montoVenta = Number(montoVenta);
    }

    get nombre() {
        return this._nombre;
    }

    get montoVenta() {
        return this._montoVenta;
    }
}
