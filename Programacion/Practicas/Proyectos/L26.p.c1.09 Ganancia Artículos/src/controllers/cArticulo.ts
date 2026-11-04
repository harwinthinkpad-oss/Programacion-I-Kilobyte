import { iArticulo } from "../interfaces/iArticulo.js";
import mArticulo from "../models/mArticulo.js";

export default class cArticulo {
  private vista: iArticulo;
  private callback!: (articulo: mArticulo | null) => void;

  constructor(vista: iArticulo) {
    this.vista = vista;
    this.vista.onCancelar(() => this.btCancelarOnClick());
    this.vista.onAceptar(() => this.btAceptarOnClick());
  }

  solicitarArticulo(callback: (articulo: mArticulo | null) => void): void {
    this.callback = callback;
    this.vista.mostrar();
  }

  private btCancelarOnClick(): void {
    this.callback(null);
    this.vista.ocultar();
  }

  private btAceptarOnClick(): void {
    this.callback(
      new mArticulo({
        codigo: this.vista.codigo,
        costo: this.vista.costo,
        precioVenta: this.vista.precioVenta,
      }),
    );
    this.vista.ocultar();
  }
}