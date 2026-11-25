import { iReparacion } from "../interfaces/iReparacion.js";

export default class vReparacionPlain implements iReparacion {
  private vista: HTMLElement;
  private inOrden: HTMLInputElement;
  private inCliente: HTMLInputElement;
  private inCostoRepuesto: HTMLInputElement;
  private selTipo: HTMLSelectElement;
  private chkOled: HTMLInputElement;
  private chkReciclaje: HTMLInputElement;
  private rowOled: HTMLElement;
  private rowReciclaje: HTMLElement;
  private btCancelar: HTMLButtonElement;
  private btAceptar: HTMLButtonElement;

  constructor() {
    this.vista = document.getElementById("reparacion") as HTMLElement;
    this.inOrden = document.getElementById("rep_inOrden") as HTMLInputElement;
    this.inCliente = document.getElementById("rep_inCliente") as HTMLInputElement;
    this.inCostoRepuesto = document.getElementById("rep_inCostoRepuesto") as HTMLInputElement;
    this.selTipo = document.getElementById("rep_selTipo") as HTMLSelectElement;
    this.chkOled = document.getElementById("rep_chkOled") as HTMLInputElement;
    this.chkReciclaje = document.getElementById("rep_chkReciclaje") as HTMLInputElement;
    this.rowOled = document.getElementById("rep_rowOled") as HTMLElement;
    this.rowReciclaje = document.getElementById("rep_rowReciclaje") as HTMLElement;
    this.btCancelar = document.getElementById("rep_btCancelar") as HTMLButtonElement;
    this.btAceptar = document.getElementById("rep_btAceptar") as HTMLButtonElement;

    this.selTipo.onchange = () => this.actualizarCampos();
  }

  private actualizarCampos(): void {
    if (this.selTipo.value === "pantalla") {
      this.rowOled.hidden = false;
      this.rowReciclaje.hidden = true;
    } else {
      this.rowOled.hidden = true;
      this.rowReciclaje.hidden = false;
    }
  }

  get orden(): string {
    return this.inOrden.value.trim();
  }
  get cliente(): string {
    return this.inCliente.value.trim();
  }
  get costoRepuesto(): number {
    return this.inCostoRepuesto ? +this.inCostoRepuesto.value : 0;
  }
  get tipoPantalla(): boolean {
    return this.selTipo.value === "pantalla";
  }
  get esOled(): boolean {
    return this.chkOled.checked;
  }
  get reciclaje(): boolean {
    return this.chkReciclaje.checked;
  }

  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = callback;
  }

  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
  }

  mostrar(): void {
    if (this.vista === null) return;
    this.inOrden.value = "";
    this.inCliente.value = "";
    this.inCostoRepuesto.value = "";
    this.selTipo.value = "pantalla";
    this.chkOled.checked = false;
    this.chkReciclaje.checked = false;
    this.actualizarCampos();
    this.vista.hidden = false;
  }

  ocultar(): void {
    if (this.vista === null) return;
    this.vista.hidden = true;
  }
}
