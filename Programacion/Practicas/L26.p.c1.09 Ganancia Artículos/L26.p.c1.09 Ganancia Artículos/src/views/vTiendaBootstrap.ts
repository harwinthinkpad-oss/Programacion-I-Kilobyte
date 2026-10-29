import { iTienda } from "../interfaces/iTienda.js";

export default class vTiendaBootstrap implements iTienda {
  private lblGananciaTotal: HTMLElement;
  private lblCodigoMayor: HTMLElement;
  private btNuevoArticulo: HTMLButtonElement;

  constructor() {
    this.btNuevoArticulo = document.getElementById("body_btNuevoArticulo") as HTMLButtonElement;
    this.lblGananciaTotal = document.getElementById("body_lblGananciaTotal") as HTMLElement;
    this.lblCodigoMayor = document.getElementById("body_lblCodigoMayor") as HTMLElement;
  }

  onNuevoArticulo(callback: () => void): void {
    this.btNuevoArticulo.onclick = callback;
  }

  reportar({ gananciaTotal, codigoMayorPrecio }: { gananciaTotal: number; codigoMayorPrecio: number }): void {
    this.lblGananciaTotal.innerHTML = `${gananciaTotal}`;
    this.lblCodigoMayor.innerHTML = `${codigoMayorPrecio}`;
  }
}