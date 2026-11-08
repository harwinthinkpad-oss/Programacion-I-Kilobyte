import Empresa from "../../models/m/Empresa.js";
export default class ControladorAumentoSueldo {
    vista;
    controladorTrabajador;
    empresa = new Empresa();
    constructor(vista, controladorTrabajador) {
        this.vista = vista;
        this.controladorTrabajador = controladorTrabajador;
        this.vista.onNuevoTrabajador(() => this.solicitarTrabajador());
    }
    solicitarTrabajador() {
        this.controladorTrabajador.solicitarTrabajador((trabajador) => {
            if (trabajador === null) {
                return;
            }
            this.empresa.procesarTrabajador(trabajador);
            this.vista.agregarAumento(trabajador.nombre, trabajador.tipo, trabajador.antiguedad, trabajador.aumento());
            this.vista.reportar({
                totalMontoAdicional: this.empresa.totalMontoAdicional(),
                totalAniosServicio: this.empresa.totalAniosServicio(),
            });
        });
    }
}
//# sourceMappingURL=ControladorAumentoSueldo.js.map