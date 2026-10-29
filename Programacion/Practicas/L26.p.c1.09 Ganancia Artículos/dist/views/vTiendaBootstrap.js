export default class vTiendaBootstrap {
    lblGananciaTotal;
    lblCodigoMayor;
    btNuevoArticulo;
    constructor() {
        this.btNuevoArticulo = document.getElementById("body_btNuevoArticulo");
        this.lblGananciaTotal = document.getElementById("body_lblGananciaTotal");
        this.lblCodigoMayor = document.getElementById("body_lblCodigoMayor");
    }
    onNuevoArticulo(callback) {
        this.btNuevoArticulo.onclick = callback;
    }
    reportar({ gananciaTotal, codigoMayorPrecio }) {
        this.lblGananciaTotal.innerHTML = `${gananciaTotal}`;
        this.lblCodigoMayor.innerHTML = `${codigoMayorPrecio}`;
    }
}
//# sourceMappingURL=vTiendaBootstrap.js.map