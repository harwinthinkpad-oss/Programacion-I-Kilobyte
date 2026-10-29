import mArticulo from "../models/mArticulo.js";
export default class cArticulo {
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
        this.vista.onCancelar(() => this.btCancelarOnClick());
        this.vista.onAceptar(() => this.btAceptarOnClick());
    }
    solicitarArticulo(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
    btAceptarOnClick() {
        this.callback(new mArticulo({
            codigo: this.vista.codigo,
            costo: this.vista.costo,
            precioVenta: this.vista.precioVenta,
        }));
        this.vista.ocultar();
    }
}
//# sourceMappingURL=cArticulo.js.map