import ITrabajadorVista from "../../interfaces/i/ITrabajadorVista.js";
import type { TipoTrabajador } from "../../models/m/Trabajador.js";

export default class TrabajadorVistaPlain implements ITrabajadorVista {
  private readonly vista: HTMLElement;
  private readonly inNombre: HTMLInputElement;
  private readonly slTipo: HTMLSelectElement;
  private readonly inSueldo: HTMLInputElement;
  private readonly btAceptar: HTMLButtonElement;
  private readonly btCancelar: HTMLButtonElement;

  constructor() {
    this.vista = document.getElementById("trabajador") as HTMLElement;
    this.inNombre = document.getElementById(
      "trabajador_inNombre",
    ) as HTMLInputElement;
    this.slTipo = document.getElementById(
      "trabajador_slTipo",
    ) as HTMLSelectElement;
    this.inSueldo = document.getElementById(
      "trabajador_inSueldo",
    ) as HTMLInputElement;
    this.btAceptar = document.getElementById(
      "trabajador_btAceptar",
    ) as HTMLButtonElement;
    this.btCancelar = document.getElementById(
      "trabajador_btCancelar",
    ) as HTMLButtonElement;
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
    this.vista.hidden = false;
  }

  ocultar(): void {
    this.vista.hidden = true;
  }
}
