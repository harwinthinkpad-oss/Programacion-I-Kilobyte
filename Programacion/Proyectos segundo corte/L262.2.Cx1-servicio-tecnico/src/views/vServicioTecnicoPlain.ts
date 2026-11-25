import { iServicioTecnico } from "../interfaces/iServicioTecnico.js";

export default class vServicioTecnicoPlain implements iServicioTecnico {
  private vista: HTMLElement | null;
  private btNuevaOrden: HTMLButtonElement;
  private listaOrdenes: HTMLElement;
  private lblIngresoTotal: HTMLElement;
  private lblPorcentajePantalla: HTMLElement;
  private lblOrdenMenor: HTMLElement;

  constructor() {
    this.vista = document.getElementById("body");
    this.btNuevaOrden = document.getElementById("body_btNuevaOrden") as HTMLButtonElement;
    this.listaOrdenes = document.getElementById("body_listaOrdenes") as HTMLElement;
    this.lblIngresoTotal = document.getElementById("body_lblIngresoTotal") as HTMLElement;
    this.lblPorcentajePantalla = document.getElementById("body_lblPorcentajePantalla") as HTMLElement;
    this.lblOrdenMenor = document.getElementById("body_lblOrdenMenor") as HTMLElement;
  }

  onNuevaOrden(callback: () => void): void {
    this.btNuevaOrden.onclick = callback;
  }

  reportar({
    orden,
    cliente,
    monto,
    ingresoTotal,
    porcentajePantalla,
    ordenMenorMonto,
  }: {
    orden: string;
    cliente: string;
    monto: number;
    ingresoTotal: number;
    porcentajePantalla: number;
    ordenMenorMonto: string;
  }): void {
    // Agregar línea de orden procesada
    const item = document.createElement("div");
    item.innerHTML = `Orden ${orden} (${cliente}): <strong>$${monto.toFixed(2)}</strong>`;
    this.listaOrdenes.appendChild(item);

    // Actualizar resumen
    this.lblIngresoTotal.innerHTML = `$${ingresoTotal.toFixed(2)}`;
    this.lblPorcentajePantalla.innerHTML = `${porcentajePantalla.toFixed(2)}%`;
    this.lblOrdenMenor.innerHTML = ordenMenorMonto;
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
