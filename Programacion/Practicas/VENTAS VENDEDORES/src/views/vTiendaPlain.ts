import { iTienda } from "../interfaces/iTienda.js";

export default class vTiendaPlain implements iTienda {
    private botonNuevoVendedor: HTMLButtonElement;
    private etiquetaVentasMayores: HTMLElement;
    private etiquetaVentasMenores: HTMLElement;
    private etiquetaMontoTotal: HTMLElement;

    constructor() {
        this.botonNuevoVendedor = document.getElementById("tienda_btNuevoVendedor") as HTMLButtonElement;
        this.etiquetaVentasMayores = document.getElementById("tienda_lblVentasMayores") as HTMLElement;
        this.etiquetaVentasMenores = document.getElementById("tienda_lblVentasMenores") as HTMLElement;
        this.etiquetaMontoTotal = document.getElementById("tienda_lblMontoTotal") as HTMLElement;
    }

    onNuevoVendedor(callback: () => void): void {
        this.botonNuevoVendedor.onclick = callback;
    }

    reportar(data: { ventasMayores: number; ventasMenores: number; montoTotal: number }): void {
        this.etiquetaVentasMayores.textContent = String(data.ventasMayores);
        this.etiquetaVentasMenores.textContent = String(data.ventasMenores);
        this.etiquetaMontoTotal.textContent = data.montoTotal.toFixed(2);
    }
}
