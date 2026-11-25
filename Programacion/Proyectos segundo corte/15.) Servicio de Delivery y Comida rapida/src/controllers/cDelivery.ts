import CEnvio from "./cEnvio.js";
import { iDelivery, RegistroEnvio } from "../interfaces/iDelivery.js";
import MDelivery from "../models/mDelivery.js";
import MMoto from "../models/mMoto.js";

export default class CDelivery {
  private modelo = new MDelivery();
  private readonly vista: iDelivery;
  private readonly controladorEnvio: CEnvio;

  constructor(vista: iDelivery, controladorEnvio: CEnvio) {
    this.vista = vista;
    this.controladorEnvio = controladorEnvio;
    this.vista.onNuevoEnvio(() => this.procesarEnvio());
    this.reportar(null);
  }

  private procesarEnvio(): void {
    this.controladorEnvio.solicitarEnvio((envio) => {
      if (envio !== null) {
        this.modelo.procesar(envio);
        this.reportar({
          numeroGuia: envio.numeroGuia,
          tipo: envio instanceof MMoto ? "Moto" : "Bici",
          costo: envio.costoEnvio,
          tiempoEstimado: envio.tiempoEstimado(),
        });
      }
    });
  }

  private reportar(envio: RegistroEnvio | null): void {
    this.vista.reportar({
      envio,
      totalMoto: this.modelo.totalMoto(),
      totalBici: this.modelo.totalBici(),
      promedioGeneral: this.modelo.promedioGeneral(),
      tiempoPromedio: this.modelo.tiempoPromedio(),
      mayorPropinaMoto: this.modelo.mayorPropinaMoto(),
    });
  }
}
