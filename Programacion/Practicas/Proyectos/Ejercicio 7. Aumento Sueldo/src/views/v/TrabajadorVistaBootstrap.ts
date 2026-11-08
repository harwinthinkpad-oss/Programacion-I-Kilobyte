import ITrabajadorVista from "../../interfaces/i/ITrabajadorVista.js";
import type { TipoTrabajador } from "../../models/m/Trabajador.js";

declare const bootstrap: {
  Modal: new (elemento: HTMLElement) => {
    show(): void;
    hide(): void;
  };
};

export default class TrabajadorVistaBootstrap implements ITrabajadorVista {
  private readonly inNombre: HTMLInputElement;
  private readonly slTipo: HTMLSelectElement;
  private readonly inSueldo: HTMLInputElement;
  private readonly inAntiguedad: HTMLInputElement;
  private readonly btAceptar: HTMLButtonElement;
  private readonly btCancelar: HTMLButtonElement;
  private readonly modal: InstanceType<typeof bootstrap.Modal>;

  constructor() {
    this.inNombre = document.getElementById(
      "trabajador_inNombre",
    ) as HTMLInputElement;
    this.slTipo = document.getElementById(
      "trabajador_slTipo",
    ) as HTMLSelectElement;
    this.inSueldo = document.getElementById(
      "trabajador_inSueldo",
    ) as HTMLInputElement;
    this.inAntiguedad = document.getElementById(
      "trabajador_inAntiguedad",
    ) as HTMLInputElement;
    this.btAceptar = document.getElementById(
      "trabajador_btAceptar",
    ) as HTMLButtonElement;
    this.btCancelar = document.getElementById(
      "trabajador_btCancelar",
    ) as HTMLButtonElement;

    const elementoModal = document.getElementById("trabajador");
    if (elementoModal === null) {
      throw new Error("No se encontró el modal del trabajador.");
    }
    this.modal = new bootstrap.Modal(elementoModal);
  }

  get nombre(): string {
    return this.inNombre.value.trim();
  }

  get tipo(): TipoTrabajador {
    return this.slTipo.value === "1" ? 1 : 2;
  }

  get sueldo(): number {
    return +this.inSueldo.value;
  }

  get antiguedad(): number {
    return +this.inAntiguedad.value;
  }

  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = callback;
  }

  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
  }

  mostrar(): void {
    this.inNombre.value = "";
    this.slTipo.value = "1";
    this.inSueldo.value = "";
    this.inAntiguedad.value = "";
    this.modal.show();
  }

  ocultar(): void {
    this.modal.hide();
  }
}
