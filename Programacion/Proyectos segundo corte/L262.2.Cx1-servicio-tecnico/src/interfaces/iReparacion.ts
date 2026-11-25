// Interfaz de la vista de Reparación (formulario de ingreso de orden)
export interface iReparacion {
  get orden(): string;
  get cliente(): string;
  get costoRepuesto(): number;
  get tipoPantalla(): boolean;   // true = Pantalla, false = Batería
  get esOled(): boolean;
  get reciclaje(): boolean;
  mostrar(): void;
  ocultar(): void;
  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void;
}
