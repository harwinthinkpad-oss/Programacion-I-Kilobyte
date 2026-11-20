import { iConvencion, RegistroAsistente } from "../interfaces/iConvencion.js";

export default class VConvencionBootstrap implements iConvencion {
  private readonly btNuevo: HTMLButtonElement;
  private readonly filas: HTMLElement;
  private readonly lblTotal: HTMLElement;
  private readonly lblPromedio: HTMLElement;
  private readonly lblPorcentajeArtesanales: HTMLElement;

  constructor() {
    this.btNuevo = document.getElementById("body_btNuevoAsistente") as HTMLButtonElement;
    this.filas = document.getElementById("body_asistentes") as HTMLElement;
    this.lblTotal = document.getElementById("body_lblTotal") as HTMLElement;
    this.lblPromedio = document.getElementById("body_lblPromedio") as HTMLElement;
    this.lblPorcentajeArtesanales = document.getElementById("body_lblPorcentajeArtesanales") as HTMLElement;
  }

  onNuevoAsistente(callback: () => void): void {
    this.btNuevo.onclick = callback;
  }

  reportar({
    asistente,
    totalRecaudado,
    promedioCosplayers,
    porcentajeCosplayersArtesanales,
  }: {
    asistente: RegistroAsistente | null;
    totalRecaudado: number;
    promedioCosplayers: number;
    porcentajeCosplayersArtesanales: number;
  }): void {
    if (asistente !== null) {
      const fila = document.createElement("tr");
      for (const valor of [
        asistente.nombre,
        String(asistente.cedula),
        asistente.tipo,
        `$${this.formatearMonto(asistente.monto)}`,
        asistente.trajeArtesanal === null
          ? "-"
          : asistente.trajeArtesanal
            ? "Sí"
            : "No",
      ]) {
        const celda = document.createElement("td");
        celda.textContent = valor;
        fila.append(celda);
      }
      this.filas.append(fila);
    }
    this.lblTotal.textContent = `$${this.formatearMonto(totalRecaudado)}`;
    this.lblPromedio.textContent = `$${this.formatearMonto(promedioCosplayers)}`;
    this.lblPorcentajeArtesanales.textContent =
      `${porcentajeCosplayersArtesanales.toFixed(2)}%`;
  }

  private formatearMonto(monto: number): string {
    return Number.isInteger(monto) ? String(monto) : monto.toFixed(2);
  }
}
