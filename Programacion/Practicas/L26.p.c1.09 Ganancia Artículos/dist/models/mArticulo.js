export default class mArticulo {
    _codigo = 0;
    _costo = 0;
    _precioVenta = 0;
    constructor({ codigo, costo, precioVenta, }) {
        this.codigo = codigo;
        this.costo = costo;
        this.precioVenta = precioVenta;
    }
    set codigo(codigo) {
        this._codigo = +codigo;
    }
    get codigo() {
        return this._codigo;
    }
    set costo(costo) {
        this._costo = +costo;
    }
    get costo() {
        return this._costo;
    }
    set precioVenta(precioVenta) {
        this._precioVenta = +precioVenta;
    }
    get precioVenta() {
        return this._precioVenta;
    }
    ganancia() {
        return this.precioVenta - this.costo;
    }
}
//# sourceMappingURL=mArticulo.js.map