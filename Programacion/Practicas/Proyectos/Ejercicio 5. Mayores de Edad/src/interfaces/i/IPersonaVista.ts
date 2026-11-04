export default interface IPersonaVista {
  get nombre(): string;
  get edad(): number;
  mostrar(): void;
  ocultar(): void;
  mostrarError(mensaje: string): void;
  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void;
}
