import MAsistente from "./mAsistente.js";
import MCosplayer from "./mCosplayer.js";

export default class MConvencion {
  private acRecaudado: number = 0;
  private acPagoCosplayers: number = 0;
  private cntCosplayers: number = 0;
  private cntCosplayersArtesanales: number = 0;

  procesarAsistente(asistente: MAsistente): void {
    this.acRecaudado += asistente.pago;
    if (asistente instanceof MCosplayer) {
      this.acPagoCosplayers += asistente.pago;
      this.cntCosplayers++;
      if (asistente.trajeArtesanal) {
        this.cntCosplayersArtesanales++;
      }
    }
  }

  totalRecaudado(): number {
    return this.acRecaudado;
  }

  promedioCosplayers(): number {
    if (this.cntCosplayers > 0) {
      return this.acPagoCosplayers / this.cntCosplayers;
    }
    return 0;
  }

  porcentajeCosplayersArtesanales(): number {
    if (this.cntCosplayers > 0) {
      return (this.cntCosplayersArtesanales / this.cntCosplayers) * 100;
    }
    return 0;
  }
}
