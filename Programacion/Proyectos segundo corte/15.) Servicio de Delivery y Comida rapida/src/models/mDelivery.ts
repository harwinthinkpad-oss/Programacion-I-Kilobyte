import MEnvio from "./mEnvio.js";
import MBici from "./mBici.js";
import MMoto from "./mMoto.js";

export default class MDelivery {
  private acRecaudadoMoto: number = 0;
  private acRecaudadoBici: number = 0;
  private acCostoEnvios: number = 0;
  private acTiempoEstimado: number = 0;
  private cntEnvios: number = 0;
  private mayorPropinaRecibidaMoto: number = 0;

  procesar(envio: MEnvio): void {
    const costo = envio.costoEnvio;
    const tiempo = envio.tiempoEstimado();

    this.acCostoEnvios += costo;
    this.acTiempoEstimado += tiempo;
    this.cntEnvios++;

    if (envio instanceof MMoto) {
      this.acRecaudadoMoto += costo;
      if (envio.propinaRecibida > this.mayorPropinaRecibidaMoto) {
        this.mayorPropinaRecibidaMoto = envio.propinaRecibida;
      }
    } else if (envio instanceof MBici) {
      this.acRecaudadoBici += costo;
    }
  }

  totalMoto(): number {
    return this.acRecaudadoMoto;
  }

  totalBici(): number {
    return this.acRecaudadoBici;
  }

  promedioGeneral(): number {
    if (this.cntEnvios > 0) return this.acCostoEnvios / this.cntEnvios;
    return 0;
  }

  tiempoPromedio(): number {
    if (this.cntEnvios > 0) return this.acTiempoEstimado / this.cntEnvios;
    return 0;
  }

  mayorPropinaMoto(): number {
    return this.mayorPropinaRecibidaMoto;
  }
}
