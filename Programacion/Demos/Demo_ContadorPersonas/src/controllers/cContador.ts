import type { IContador } from "../interfaces/IContador.js";
import type { IPersonas } from "../interfaces/IPersonas.js";
import mContador from "../models/mContador.js";
import type mPersonas from "../models/mPersonas.js";

// Mantiene el conteo durante toda la captura y coordina las dos vistas.
export default class cContador {
    // Este modelo conserva los acumuladores entre registros; no se crea uno nuevo por persona.
    private readonly contador = new mContador();

    // Indica si el usuario ya cerró la captura y se presentó el reporte final.
    private finalizado = false;

    // Recibe la vista de resultados y la vista de captura que se bloqueará al finalizar.
    constructor(
        private readonly vista: IContador,
        private readonly vistaPersonas: IPersonas,
    ) {
        this.vista.onFinalizar(() => this.finalizar());
    }

    // Acumula una persona y actualiza los tres indicadores visibles sin reiniciar el modelo.
    procesarPersona(persona: mPersonas): void {
        if (this.finalizado) {
            return;
        }

        this.contador.procesarPersona(persona);
        this.vista.actualizarConteos({
            total: this.contador.returnContador(),
            mujeres: this.contador.returnAcPersonasFemeninas(),
            hombres: this.contador.returnAcPersonasMasculinas(),
        });
        this.vista.mostrarError("");
    }

    // No permite un reporte vacío; después del primer registro bloquea y cierra la captura.
    private finalizar(): void {
        if (this.contador.returnContador() === 0) {
            this.vista.mostrarError("Registra al menos una persona antes de finalizar.");
            return;
        }

        this.finalizado = true;
        this.vista.finalizarCaptura();
        this.vistaPersonas.finalizarCaptura();
        this.vista.mostrarError("");
        this.vista.reportar({
            total: this.contador.returnContador(),
            mujeres: this.contador.returnAcPersonasFemeninas(),
            hombres: this.contador.returnAcPersonasMasculinas(),
        });
    }
}
