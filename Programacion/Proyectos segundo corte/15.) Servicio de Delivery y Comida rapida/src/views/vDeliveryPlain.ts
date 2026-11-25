import { iDelivery, RegistroEnvio } from "../interfaces/iDelivery.js";

export default class VDeliveryPlain implements iDelivery {
  private readonly btNuevo: HTMLButtonElement;
  private readonly reporte: HTMLElement;
  private detalleEnvios: string = "";

  constructor() {
    this.btNuevo = document.getElementById("body_btNuevoEnvio") as HTMLButtonElement;
    this.reporte = document.getElementById("body_reporte") as HTMLElement;
  }

  onNuevoEnvio(callback: () => void): void {
    this.btNuevo.onclick = callback;
  }

  reportar({
    envio,
    totalMoto,
    totalBici,
    promedioGeneral,
    tiempoPromedio,
    mayorPropinaMoto,
  }: {
    envio: RegistroEnvio | null;
    totalMoto: number;
    totalBici: number;
    promedioGeneral: number;
    tiempoPromedio: number;
    mayorPropinaMoto: number;
  }): void {
    if (envio !== null) {
      this.detalleEnvios += `Guía ${envio.numeroGuia}: $${this.formatearMonto(envio.costo)} -> Tiempo estimado: ${envio.tiempoEstimado} min\n`;
    }
    let texto = this.detalleEnvios;
    if (this.detalleEnvios !== "") texto += "\n";
    texto += `Total recaudado en envíos Moto: $${this.formatearMonto(totalMoto)}\n`;
    texto += `Total recaudado en envíos Bici: $${this.formatearMonto(totalBici)}\n`;
    texto += `Promedio general de costo de envío: $${this.formatearMonto(promedioGeneral)}\n`;
    texto += `Tiempo promedio de entrega: ${this.formatearMonto(tiempoPromedio)} min\n`;
    texto += `Mayor propina recibida en envíos Moto: $${this.formatearMonto(mayorPropinaMoto)}`;
    this.reporte.textContent = texto;
  }

  private formatearMonto(monto: number): string {
    return monto.toFixed(2);
  }
}
