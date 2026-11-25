// CLASE MENOR DERIVADA — mPantalla.ts
// Cambio de Pantalla: monto base + $15 mano de obra.
// Si es OLED original: aplica 20% de recargo sobre el subtotal acumulado.

import { mReparacion } from "./mReparacion.js";

export class mPantalla extends mReparacion {
  private _esOled: boolean;

  constructor({
    orden,
    cliente,
    costoRepuesto,
    esOled,
  }: {
    orden: string;
    cliente: string;
    costoRepuesto: number;
    esOled: boolean;
  }) {
    super({ orden, cliente, costoRepuesto });
    this._esOled = esOled;
  }

  set esOled(valor: boolean) {
    this._esOled = valor;
  }

  get esOled(): boolean {
    return this._esOled;
  }

  override monto(): number {
    // Subtotal: monto base + $15 de mano de obra especializada
    const subtotal = this.montoBase + 15;
    // Si es OLED: recargo del 20% sobre el subtotal
    if (this.esOled) {
      return subtotal * 1.20;
    }
    return subtotal;
  }
}
