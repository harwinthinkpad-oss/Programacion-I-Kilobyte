import mMayores from "../../models/mMayores.js";
export default class ControladorMayores {
    vista;
    controladorPersona;
    mayores = new mMayores();
    finalizado = false;
    constructor(vista, controladorPersona) {
        this.vista = vista;
        this.controladorPersona = controladorPersona;
        this.vista.onNuevaPersona(() => this.solicitarPersona());
        this.vista.onFinalizar(() => this.finalizar());
    }
    solicitarPersona() {
        if (this.finalizado) {
            return;
        }
        this.controladorPersona.solicitarPersona((persona) => {
            if (persona === null) {
                return;
            }
            this.mayores.procesar(persona);
            this.vista.agregarPersona(persona.nombre, persona.edad);
        });
    }
    finalizar() {
        if (this.finalizado) {
            return;
        }
        this.finalizado = true;
        this.vista.reportar({
            cantidadPersonas: this.mayores.acPersonas,
            cantidadMayores: this.mayores.contMayores,
            porcentajeMayores: this.mayores.returnPorcMayores(),
        });
    }
}
//# sourceMappingURL=ControladorMayores.js.map