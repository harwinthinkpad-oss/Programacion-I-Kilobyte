export interface iTienda {
  onNuevoArticulo(callback: () => void): void;
  reportar(data: { gananciaTotal: number; codigoMayorPrecio: number }): void;
}