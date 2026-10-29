export interface iArticulo {
  get codigo(): number;
  get costo(): number;
  get precioVenta(): number;
  mostrar(): void;
  ocultar(): void;
  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void;
} 