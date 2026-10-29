export default class mTienda {
    acumGanancia = 0;
    mayorPrecioVenta = 0;
    auxCodigoMayor = 0;
    constructor() {
        this.acumGanancia = 0;
        this.mayorPrecioVenta = 0;
        this.auxCodigoMayor = 0;
    }
    procesarArticulo(a) {
        this.acumGanancia += a.ganancia();
        if (a.precioVenta > this.mayorPrecioVenta) {
            this.mayorPrecioVenta = a.precioVenta;
            this.auxCodigoMayor = a.codigo;
        }
    }
    gananciaTotal() {
        return this.acumGanancia;
    }
    codigoMayorPrecio() {
        return this.auxCodigoMayor;
    }
}
//# sourceMappingURL=mTienda.js.map