import { iServicioTecnico } from "../interfaces/iServicioTecnico.js";

export default class vServicioTecnicoBootstrap implements iServicioTecnico {
  private btNuevaOrden: HTMLButtonElement;
  private tbOrdenes: HTMLElement;
  private lblIngresoTotal: HTMLElement;
  private lblPorcentajePantalla: HTMLElement;
  private lblOrdenMenor: HTMLElement;

  constructor() {
    this.btNuevaOrden = document.getElementById("body_btNuevaOrden") as HTMLButtonElement;
    this.tbOrdenes = document.getElementById("body_tbOrdenes") as HTMLElement;
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
    // Agregar fila a la tabla de órdenes
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${orden}</td>
      <td>${cliente}</td>
      <td class="text-end">$${monto.toFixed(2)}</td>
    `;
    this.tbOrdenes.appendChild(fila);

    // Actualizar resumen
    this.lblIngresoTotal.innerHTML = `$${ingresoTotal.toFixed(2)}`;
    this.lblPorcentajePantalla.innerHTML = `${porcentajePantalla.toFixed(2)}%`;
    this.lblOrdenMenor.innerHTML = ordenMenorMonto;
  }
}
