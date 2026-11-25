// CLASE MENOR DERIVADA — mBateria.ts
// Cambio de Batería y Puerto: monto base + $8 instalación.
// Si entrega batería para reciclaje: descuento fijo de $3.

import { mReparacion } from "./mReparacion.js";

export class mBateria extends mReparacion {
  private _reciclaje: boolean;

  constructor({
    orden,
    cliente,
    costoRepuesto,
    reciclaje,
  }: {
    orden: string;
    cliente: string;
    costoRepuesto: number;
    reciclaje: boolean;
  }) {
    super({ orden, cliente, costoRepuesto });
    this._reciclaje = reciclaje;
  }

  set reciclaje(valor: boolean) {
    this._reciclaje = valor;
  }

  get reciclaje(): boolean {
    return this._reciclaje;
  }

  override monto(): number {
    // Subtotal: monto base + $8 de instalación
    const subtotal = this.montoBase + 8;
    // Si entrega batería para reciclaje: descuento fijo de $3
    if (this.reciclaje) {
      return subtotal - 3;
    }
    return subtotal;
  }
}
