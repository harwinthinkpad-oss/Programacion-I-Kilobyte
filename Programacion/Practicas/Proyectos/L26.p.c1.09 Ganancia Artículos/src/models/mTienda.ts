import mArticulo from "./mArticulo.js";

export default class mTienda {
  private acumGanancia: number = 0;
  private mayorPrecioVenta: number = 0;
  private auxCodigoMayor: number = 0;

  constructor() {
    this.acumGanancia = 0;
    this.mayorPrecioVenta = 0;
    this.auxCodigoMayor = 0;
  }

  procesarArticulo(a: mArticulo): void {
    this.acumGanancia += a.ganancia();
    if (a.precioVenta > this.mayorPrecioVenta) {
      this.mayorPrecioVenta = a.precioVenta;
      this.auxCodigoMayor = a.codigo;
    }
  }

  gananciaTotal(): number {
    return this.acumGanancia;
  }

  codigoMayorPrecio(): number {
    return this.auxCodigoMayor;
  }
}