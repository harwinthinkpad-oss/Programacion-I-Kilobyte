import mIngresos from "../models/mIngresos.js";
import type cPersona from "./cPersona.js";
import type { iIngresos } from "../interfaces/iIngresos.js";

export default class cIngresos {
    private ingresos = new mIngresos();

    constructor(
        private vista: iIngresos,
        private controladorPersona: cPersona,
    ) {
        this.vista.onNuevaPersona(() => this.solicitarPersona());
    }

    private solicitarPersona(): void {
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