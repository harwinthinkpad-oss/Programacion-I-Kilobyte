import { iConvencion, RegistroAsistente } from "../interfaces/iConvencion.js";

export default class VConvencionPlain implements iConvencion {
  private readonly btNuevo: HTMLButtonElement;
  private readonly reporte: HTMLElement;
  private detalleAsistentes: string = "";

  constructor() {
    this.btNuevo = document.getElementById("body_btNuevoAsistente") as HTMLButtonElement;
    this.reporte = document.getElementById("body_reporte") as HTMLElement;
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
      const artesanal =
        asistente.trajeArtesanal === null
          ? ""
          : `, traje artesanal: ${asistente.trajeArtesanal ? "Sí" : "No"}`;
      this.detalleAsistentes += `${asistente.nombre} (${asistente.cedula}) paga: $${this.formatearMonto(asistente.monto)}${artesanal}\n`;
    }
    let texto = this.detalleAsistentes;
    if (this.detalleAsistentes !== "") texto += "\n";
    texto += `Total recaudado en taquilla: $${this.formatearMonto(totalRecaudado)}\n`;
    texto += `Promedio pagado por Cosplayers: $${this.formatearMonto(promedioCosplayers)}\n`;
    texto += `Porcentaje de Cosplayers con traje artesanal: ${porcentajeCosplayersArtesanales.toFixed(2)}%`;
    this.reporte.textContent = texto;
  }

  private formatearMonto(monto: number): string {
    return Number.isInteger(monto) ? String(monto) : monto.toFixed(2);
  }
}
