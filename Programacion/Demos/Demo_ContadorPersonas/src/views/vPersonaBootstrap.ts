import type { IPersonas } from "../interfaces/IPersonas.js";

// Vista Bootstrap: lee los campos y conecta el botón para registrar sin recargar la página.
export default class vPersonaBootstrap implements IPersonas {
    // Referencias a los controles que presentan o reciben datos de la persona.
    private readonly formulario = document.getElementById("formPersona") as HTMLFormElement;
    private readonly campos = document.getElementById("camposPersona") as HTMLFieldSetElement;
    private readonly entradaNombre = document.getElementById("inNombre") as HTMLInputElement;
    private readonly entradaSexo = document.getElementById("inSexo") as HTMLSelectElement;
    private readonly mensajeError = document.getElementById("mensajePersona") as HTMLElement;
    private readonly botonRegistrar = document.getElementById("btRegistrar") as HTMLButtonElement;

    // Recorta espacios al principio y al final para no aceptar un nombre en blanco.
    get nombre(): string {
        return this.entradaNombre.value.trim();
    }

    // Convierte las opciones F=1 y M=2 al número que espera el modelo.
    get sexo(): number {
        return this.entradaSexo.value === "" ? Number.NaN : Number(this.entradaSexo.value);
    }

    // El clic registra de forma explícita; cualquier submit implícito se cancela para evitar recargas.
    onRegistrar(callback: () => void): void {
        this.botonRegistrar.addEventListener("click", callback);
        this.formulario.addEventListener("submit", (evento) => {
            evento.preventDefault();
        });
    }

    // Presenta errores en rojo y oculta el mensaje cuando no hay nada que informar.
    mostrarError(mensaje: string): void {
        this.mensajeError.textContent = mensaje;
        this.mensajeError.className = mensaje.length > 0 ? "text-danger" : "d-none";
    }

    // Limpia solo los campos del formulario; los acumuladores del modelo permanecen intactos.
    limpiarFormulario(): void {
        this.formulario.reset();
        this.mostrarError("");
        this.entradaNombre.focus();
    }

    // Bloquea nombre, sexo y botón para impedir registros después del reporte final.
    finalizarCaptura(): void {
        this.campos.disabled = true;
    }
}
