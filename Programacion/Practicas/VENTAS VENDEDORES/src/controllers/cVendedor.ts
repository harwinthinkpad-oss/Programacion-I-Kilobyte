import { iVendedor } from "../interfaces/iVendedor.js";
import mVendedor from "../models/mVendedor.js";

export default class cVendedor {
    private vista: iVendedor;
    private callback: ((vendedor: mVendedor | null) => void) | null = null;

    constructor(vista: iVendedor) {
        this.vista = vista;
        this.vista.onCancelar(() => this.btCancelarOnClick());
        this.vista.onAceptar(() => this.btAceptarOnClick());
    }

    solicitarVendedor(callback: (vendedor: mVendedor | null) => void): void {
        this.callback = callback;
        this.vista.mostrar();
    }

    private btCancelarOnClick(): void {
        this.callback?.(null);
        this.callback = null;
        this.vista.ocultar();
    }

    private btAceptarOnClick(): void {
        if (this.callback === null) {
            return;
        }

        const vendedor = new mVendedor({
            nombre: this.vista.nombre,
            montoVenta: this.vista.montoVenta,
        });
        this.callback(vendedor);
        this.callback = null;
        this.vista.ocultar();
    }
}