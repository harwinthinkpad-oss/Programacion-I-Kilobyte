import type { iPersonas } from "../interfaces/iPersonas.js";

export default class vPersonaPlain implements iPersonas {
    private readonly formulario = document.getElementById("formPersona") as HTMLElement;
    private readonly entradaNombre = document.getElementById("inNombre") as HTMLInputElement;
    private readonly entradaIngresos = document.getElementById("inIngresos") as HTMLInputElement;
    private readonly mensajeError = document.getElementById("mensajeError") as HTMLElement;
    private readonly botonAceptar = document.getElementById("btAceptar") as HTMLButtonElement;
    private readonly botonCancelar = document.getElementById("btCancelar") as HTMLButtonElement;

    get nombre(): string {
        return this.entradaNombre.value.trim();
    }

    get ingresos(): number {
        const valor = this.entradaIngresos.value.trim();
        return valor === "" ? Number.NaN : Number(valor);
    }

    mostrar(): void {
        this.entradaNombre.value = "";
        this.entradaIngresos.value = "";
        this.mostrarError("");
        this.formulario.hidden = false;
        this.entradaNombre.focus();
    }

    ocultar(): void {
        this.formulario.hidden = true;
    }

    mostrarError(mensaje: string): void {
        this.mensajeError.textContent = mensaje;
    }

    onAceptar(callback: () => void): void {
        this.botonAceptar.onclick = callback;
    }

    onCancelar(callback: () => void): void {
        this.botonCancelar.onclick = callback;
    }
}
