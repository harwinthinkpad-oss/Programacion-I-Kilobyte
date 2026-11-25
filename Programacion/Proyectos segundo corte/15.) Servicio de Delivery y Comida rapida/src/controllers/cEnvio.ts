import { iEnvio } from "../interfaces/iEnvio.js";
import MEnvio from "../models/mEnvio.js";
import MBici from "../models/mBici.js";
import MMoto from "../models/mMoto.js";

export default class CEnvio {
  private readonly vista: iEnvio;
  private callback!: (envio: MEnvio | null) => void;

  constructor(vista: iEnvio) {
    this.vista = vista;
    this.vista.onCancelar(() => this.cancelar());
    this.vista.onAceptar(() => this.aceptar());
  }

  solicitarEnvio(callback: (envio: MEnvio | null) => void): void {
    this.callback = callback;
    this.vista.mostrar();
  }

  private cancelar(): void {
    this.callback(null);
    this.vista.ocultar();
  }

  private aceptar(): void {
    const datos = {
      numeroGuia: this.vista.numeroGuia,
      montoPedido: this.vista.montoPedido,
    };

    let envio: MEnvio;

    if (this.vista.tipo === "Moto") {
      envio = new MMoto({
        ...datos,
        distancia: this.vista.distancia,
        propinaRecibida: this.vista.propinaRecibida,
      });
    } else {
      envio = new MBici({
        ...datos,
        bolsaTermica: this.vista.bolsaTermica,
        horaPico: this.vista.horaPico,
      });
    }

    this.callback(envio);
    this.vista.ocultar();
  }
}
