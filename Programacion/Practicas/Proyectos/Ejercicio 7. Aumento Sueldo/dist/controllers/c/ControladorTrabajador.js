import Trabajador from "../../models/m/Trabajador.js";
export default class ControladorTrabajador {
    vista;
    callback = null;
    constructor(vista) {
        this.vista = vista;
        this.vista.onAceptar(() => this.aceptarTrabajador());
        this.vista.onCancelar(() => this.cancelar());
    }
    solicitarTrabajador(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    aceptarTrabajador() {
        const callback = this.callback;
        this.callback = null;
        if (callback !== null) {
            callback(new Trabajador(this.vista.nombre, this.vista.tipo, this.vista.sueldo, this.vista.antiguedad));
        }
        this.vista.ocultar();
    }
    cancelar() {
        const callback = this.callback;
        this.callback = null;
        if (callback !== null) {
            callback(null);
        }
        this.vista.ocultar();
    }
}
//# sourceMappingURL=ControladorTrabajador.js.map