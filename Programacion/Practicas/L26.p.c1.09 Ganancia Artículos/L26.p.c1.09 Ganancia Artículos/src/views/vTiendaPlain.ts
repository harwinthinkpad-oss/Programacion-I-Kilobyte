import { iTienda } from "../interfaces/iTienda.js";

export default class vTiendaPlain implements iTienda {
  private lblGananciaTotal: HTMLElement;
  private lblCodigoMayor: HTMLElement;
  private btNuevoArticulo: HTMLButtonElement;
  private vista: HTMLElement | null;

  constructor() {
    this.vista = document.getElementById("body");
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

  mostrar(): void {
    if (this.vista === null) return;
    this.vista.hidden = false;
  }

  ocultar(): void {
    if (this.vista === null) return;
    this.vista.hidden = true;
  }
}
