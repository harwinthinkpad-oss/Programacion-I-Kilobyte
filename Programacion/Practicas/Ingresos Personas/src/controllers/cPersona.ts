import mPersona from "../models/mPersona.js";
import type { iPersonas } from "../interfaces/iPersonas.js";

export default class cPersona {
    private callback: ((persona: mPersona | null) => void) | null = null;

    constructor(private vista: iPersonas) {
        this.vista.onAceptar(() => this.aceptarPersona());
        this.vista.onCancelar(() => this.cancelar());
    }

    solicitarPersona(callback: (persona: mPersona | null) => void): void {
        if (this.callback !== null) {
            return;
        }

        this.callback = callback;
        this.vista.mostrar();
    }

    private aceptarPersona(): void {
        if (this.callback === null) {
            return;
        }

        const nombre = this.vista.nombre;
        const ingresos = this.vista.ingresos;

        if (nombre.length === 0) {
            this.vista.mostrarError("Ingresa el nombre de la persona.");
            return;
        }

        if (!Number.isFinite(ingresos) || ingresos < 0) {
            this.vista.mostrarError("Ingresa un ingreso válido (mayor o igual a 0).");
            return;
        }

        const callback = this.callback;
        this.callback = null;
        callback(new mPersona({ nombre, ingresos }));
        this.vista.ocultar();
    }

    private cancelar(): void {
        const callback = this.callback;
        this.callback = null;
        callback?.(null);
        this.vista.ocultar();
    }
}