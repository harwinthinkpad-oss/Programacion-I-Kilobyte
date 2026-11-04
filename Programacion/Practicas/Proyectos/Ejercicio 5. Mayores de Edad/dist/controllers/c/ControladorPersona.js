import mPersona from "../../models/mPersona.js";
export default class ControladorPersona {
    vista;
    callback = null;
    constructor(vista) {
        this.vista = vista;
        this.vista.onAceptar(() => this.aceptarPersona());
        this.vista.onCancelar(() => this.cancelar());
    }
    solicitarPersona(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    aceptarPersona() {
        const nombre = this.vista.nombre;
        const edad = this.vista.edad;
        if (nombre.length === 0) {
            this.vista.mostrarError("Ingresa el nombre de la persona.");
            return;
        }
        if (!Number.isInteger(edad) || edad < 0) {
            this.vista.mostrarError("Ingresa una edad válida (un número entero mayor o igual a 0).");
            return;
        }
        const callback = this.callback;
        this.callback = null;
        callback?.(new mPersona(nombre, edad));
        this.vista.ocultar();
    }
    cancelar() {
        const callback = this.callback;
        this.callback = null;
        callback?.(null);
        this.vista.ocultar();
    }
}
//# sourceMappingURL=ControladorPersona.js.map