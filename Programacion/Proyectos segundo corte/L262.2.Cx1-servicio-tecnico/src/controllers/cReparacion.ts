import { iReparacion } from "../interfaces/iReparacion.js";
import { mReparacion } from "../models/mReparacion.js";
import { mPantalla } from "../models/mPantalla.js";
import { mBateria } from "../models/mBateria.js";

export default class cReparacion {
  private vista: iReparacion;
  private callback!: (reparacion: mReparacion | null) => void;

  constructor(vista: iReparacion) {
    this.vista = vista;
    this.vista.onCancelar(() => this.btCancelarOnClick());
    this.vista.onAceptar(() => this.btAceptarOnClick());
  }

  solicitarReparacion(callback: (reparacion: mReparacion | null) => void): void {
    this.callback = callback;
    this.vista.mostrar();
  }

  private btCancelarOnClick(): void {
    this.callback(null);
    this.vista.ocultar();
  }

  private btAceptarOnClick(): void {
    const datos = {
      orden: this.vista.orden,
      cliente: this.vista.cliente,
      costoRepuesto: this.vista.costoRepuesto,
    };

    let reparacion: mReparacion;

    if (this.vista.tipoPantalla) {
      reparacion = new mPantalla({ ...datos, esOled: this.vista.esOled });
    } else {
      reparacion = new mBateria({ ...datos, reciclaje: this.vista.reciclaje });
    }

    this.callback(reparacion);
    this.vista.ocultar();
  }
}
