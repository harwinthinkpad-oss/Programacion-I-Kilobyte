import mTienda from "../models/mTienda.js";
export default class cTienda {
    mTienda = new mTienda();
    vTienda;
    cArticulo;
    constructor(vistaTienda, controladorArticulo) {
        this.vTienda = vistaTienda;
        this.cArticulo = controladorArticulo;
        this.vTienda.onNuevoArticulo(() => this.procesar1Articulo());
    }
    procesar1Articulo() {
        this.cArticulo.solicitarArticulo((articulo) => {
            if (articulo !== null) {
                this.mTienda.procesarArticulo(articulo);
                this.vTienda.reportar({
                    gananciaTotal: this.mTienda.gananciaTotal(),
                    codigoMayorPrecio: this.mTienda.codigoMayorPrecio(),
                });
            }
        });
    }
}
//# sourceMappingURL=cTienda.js.map