export default class mClientes {
    _nombre;
    _tipocomida;
    _jugo;
    _cantidadcomida;
    constructor(nombre, tipocomida, jugo, cantidadcomida = 1) {
        this._nombre = nombre.trim();
        this._tipocomida = Number(tipocomida);
        this._jugo = jugo;
        this._cantidadcomida = Number(cantidadcomida);
    }
    set nombre(nombre) {
        this._nombre = nombre.trim();
    }
    get nombre() {
        return this._nombre;
    }
    set tipocomida(tipocomida) {
        this._tipocomida = Number(tipocomida);
    }
    get tipocomida() {
        return this._tipocomida;
    }
    set jugo(jugo) {
        this._jugo = jugo;
    }
    get jugo() {
        return this._jugo;
    }
    set cantidadcomida(cantidadcomida) {
        this._cantidadcomida = Number(cantidadcomida);
    }
    get cantidadcomida() {
        return this._cantidadcomida;
    }
    get totalGastado() {
        const precioComida = this.tipocomida === 1 ? 20 : this.tipocomida === 2 ? 10 : 0;
        const precioJugo = this.jugo ? 5 : 0;
        return this.cantidadcomida * precioComida + precioJugo;
    }
}
//# sourceMappingURL=mClientes.js.map