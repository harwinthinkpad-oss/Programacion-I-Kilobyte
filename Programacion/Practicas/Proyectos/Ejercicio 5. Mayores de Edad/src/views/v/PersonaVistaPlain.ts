import type IPersonaVista from "../../interfaces/i/IPersonaVista.js";

export default class PersonaVistaPlain implements IPersonaVista {
  private readonly vista: HTMLElement;
  private readonly inNombre: HTMLInputElement;
  private readonly inEdad: HTMLInputElement;
  private readonly mensajeError: HTMLElement;
  private readonly btAceptar: HTMLButtonElement;
  private readonly btCancelar: HTMLButtonElement;

  constructor() {
    this.vista = document.getElementById("persona") as HTMLElement;
    this.inNombre = document.getElementById("persona_inNombre") as HTMLInputElement;
    this.inEdad = document.getElementById("persona_inEdad") as HTMLInputElement;
    this.mensajeError = document.getElementById("persona_error") as HTMLElement;
    this.btAceptar = document.getElementById("persona_btAceptar") as HTMLButtonElement;
    this.btCancelar = document.getElementById("persona_btCancelar") as HTMLButtonElement;
  }

  get nombre(): string {
    return this.inNombre.value.trim();
  }

  get edad(): number {
    return this.inEdad.value.trim() === "" ? Number.NaN : Number(this.inEdad.value);
  }

  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = callback;
  }

  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
  }

  mostrar(): void {
    this.inNombre.value = "";
    this.inEdad.value = "";
    this.mostrarError("");
    this.vista.hidden = false;
    this.inNombre.focus();
  }

  ocultar(): void {
    this.vista.hidden = true;
  }

  mostrarError(mensaje: string): void {
    this.mensajeError.textContent = mensaje;
  }
}
