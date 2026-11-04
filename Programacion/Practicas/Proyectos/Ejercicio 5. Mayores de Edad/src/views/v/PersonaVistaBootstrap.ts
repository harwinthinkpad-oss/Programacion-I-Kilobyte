import type IPersonaVista from "../../interfaces/i/IPersonaVista.js";

declare const bootstrap: {
  Modal: new (elemento: HTMLElement) => {
    show(): void;
    hide(): void;
  };
};

export default class PersonaVistaBootstrap implements IPersonaVista {
  private readonly inNombre: HTMLInputElement;
  private readonly inEdad: HTMLInputElement;
  private readonly mensajeError: HTMLElement;
  private readonly btAceptar: HTMLButtonElement;
  private readonly btCancelar: HTMLButtonElement;
  private readonly modal: InstanceType<typeof bootstrap.Modal>;

  constructor() {
    this.inNombre = document.getElementById("persona_inNombre") as HTMLInputElement;
    this.inEdad = document.getElementById("persona_inEdad") as HTMLInputElement;
    this.mensajeError = document.getElementById("persona_error") as HTMLElement;
    this.btAceptar = document.getElementById("persona_btAceptar") as HTMLButtonElement;
    this.btCancelar = document.getElementById("persona_btCancelar") as HTMLButtonElement;

    const elementoModal = document.getElementById("persona");
    if (elementoModal === null) {
      throw new Error("No se encontró el modal de la persona.");
    }
    this.modal = new bootstrap.Modal(elementoModal);
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
    this.modal.show();
    this.inNombre.focus();
  }

  ocultar(): void {
    this.modal.hide();
  }

  mostrarError(mensaje: string): void {
    this.mensajeError.textContent = mensaje;
  }
}
