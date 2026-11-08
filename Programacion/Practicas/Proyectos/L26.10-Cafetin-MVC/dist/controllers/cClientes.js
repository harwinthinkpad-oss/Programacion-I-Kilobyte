import mClientes from "../models/mClientes.js";
export default class cClientes {
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
        this.vista.botonaceptar(() => this.btAceptarOnClick());
        this.vista.botoncancelar(() => this.btCancelarOnClick());
    }
    solicitarCliente(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
    btAceptarOnClick() {
        this.callback(new mClientes(this.vista.nombre, this.vista.tipocomida, this.vista.jugo, this.vista.cantidadcomida));
        this.vista.ocultar();
    }
}
//# sourceMappingURL=cClientes.js.map