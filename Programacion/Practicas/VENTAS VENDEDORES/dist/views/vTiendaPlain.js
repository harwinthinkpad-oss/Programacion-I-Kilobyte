export default class vTiendaPlain {
    constructor() {
        this.botonNuevoVendedor = document.getElementById("tienda_btNuevoVendedor");
        this.etiquetaVentasMayores = document.getElementById("tienda_lblVentasMayores");
        this.etiquetaVentasMenores = document.getElementById("tienda_lblVentasMenores");
        this.etiquetaMontoTotal = document.getElementById("tienda_lblMontoTotal");
    }

    onNuevoVendedor(callback) {
        this.botonNuevoVendedor.onclick = callback;
    }

    reportar(data) {
        this.etiquetaVentasMayores.textContent = String(data.ventasMayores);
        this.etiquetaVentasMenores.textContent = String(data.ventasMenores);
        this.etiquetaMontoTotal.textContent = data.montoTotal.toFixed(2);
    }
}
