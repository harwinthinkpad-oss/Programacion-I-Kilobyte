import { iDelivery, RegistroEnvio } from "../interfaces/iDelivery.js";

export default class VDeliveryBootstrap implements iDelivery {
  private readonly btNuevo: HTMLButtonElement;
  private readonly filas: HTMLElement;
  private readonly lblMoto: HTMLElement;
  private readonly lblBici: HTMLElement;
  private readonly lblPromedio: HTMLElement;
  private readonly lblTiempoPromedio: HTMLElement;
  private readonly lblMayorPropinaMoto: HTMLElement;

  constructor() {
    this.btNuevo = document.getElementById("body_btNuevoEnvio") as HTMLButtonElement;
    this.filas = document.getElementById("body_envios") as HTMLElement;
    this.lblMoto = document.getElementById("body_lblMoto") as HTMLElement;
    this.lblBici = document.getElementById("body_lblBici") as HTMLElement;
    this.lblPromedio = document.getElementById("body_lblPromedio") as HTMLElement;
    this.lblTiempoPromedio = document.getElementById("body_lblTiempoPromedio") as HTMLElement;
    this.lblMayorPropinaMoto = document.getElementById("body_lblMayorPropinaMoto") as HTMLElement;
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
      const fila = document.createElement("tr");
      const guia = document.createElement("td");
      guia.textContent = envio.numeroGuia;
      const tipo = document.createElement("td");
      tipo.textContent = envio.tipo;
      const costo = document.createElement("td");
      costo.textContent = `$${this.formatearMonto(envio.costo)}`;
      const tiempo = document.createElement("td");
      tiempo.textContent = `${envio.tiempoEstimado} min`;
      fila.append(guia, tipo, costo, tiempo);
      this.filas.append(fila);
    }
    this.lblMoto.textContent = `$${this.formatearMonto(totalMoto)}`;
    this.lblBici.textContent = `$${this.formatearMonto(totalBici)}`;
    this.lblPromedio.textContent = `$${this.formatearMonto(promedioGeneral)}`;
    this.lblTiempoPromedio.textContent = `${this.formatearMonto(tiempoPromedio)} min`;
    this.lblMayorPropinaMoto.textContent = `$${this.formatearMonto(mayorPropinaMoto)}`;
  }

  private formatearMonto(monto: number): string {
    return monto.toFixed(2);
  }
}
