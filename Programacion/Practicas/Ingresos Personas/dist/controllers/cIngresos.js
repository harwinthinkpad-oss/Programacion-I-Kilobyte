import mIngresos from "../models/mIngresos.js";
export default class cIngresos {
    vista;
    controladorPersona;
    ingresos = new mIngresos();
    constructor(vista, controladorPersona) {
        this.vista = vista;
        this.controladorPersona = controladorPersona;
        this.vista.onNuevaPersona(() => this.solicitarPersona());
    }
    solicitarPersona() {
        this.controladorPersona.solicitarPersona((persona) => {
            if (persona === null) {
                return;
            }
            this.ingresos.procesarPersonas(persona);
            this.vista.reportar({
                ingresoMenor: this.ingresos.ingresoMenor(),
                promedioIngreso: this.ingresos.promedioIngreso(),
            });
        });
    }
}
//# sourceMappingURL=cIngresos.js.map