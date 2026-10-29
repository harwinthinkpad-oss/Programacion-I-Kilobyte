import iClientes from "../interfaces/iClientes.js";
import mClientes from "../models/mClientes.js";

export default class cClientes {
    private vista: iClientes;
    private callback!: (cliente: mClientes | null) => void;

    constructor(vista: iClientes) {
        this.vista = vista;
        this.vista.botonaceptar(() => this.btAceptarOnClick());
        this.vista.botoncancelar(() => this.btCancelarOnClick());
    }

    solicitarCliente(callback: (cliente: mClientes | null) => void): void {
        this.callback = callback;
        this.vista.mostrar();
    }

    private btCancelarOnClick(): void {
        this.callback(null);
        this.vista.ocultar();
    }

    private btAceptarOnClick(): void {
        this.callback(new mClientes(
            this.vista.nombre,
            this.vista.tipocomida,
            this.vista.jugo,
            this.vista.cantidadcomida,
        ));
        this.vista.ocultar();
    }
}
