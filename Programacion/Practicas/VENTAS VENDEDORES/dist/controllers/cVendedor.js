import mVendedor from "../models/mVendedor.js";

export default class cVendedor {
    constructor(vista) {
        this.callback = null;
        this.vista = vista;
        this.vista.onCancelar(() => this.btCancelarOnClick());
        this.vista.onAceptar(() => this.btAceptarOnClick());
    }

    solicitarVendedor(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }

    btCancelarOnClick() {
        this.callback?.(null);
        this.callback = null;
        this.vista.ocultar();
    }

    btAceptarOnClick() {
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
