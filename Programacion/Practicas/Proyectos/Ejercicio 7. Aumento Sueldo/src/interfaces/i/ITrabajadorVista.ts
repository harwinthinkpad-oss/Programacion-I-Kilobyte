import type { TipoTrabajador } from "../../models/m/Trabajador.js";

export default interface ITrabajadorVista {
  get nombre(): string;
  get tipo(): TipoTrabajador;
  get sueldo(): number;
  get antiguedad(): number;
  mostrar(): void;
  ocultar(): void;
  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void;
}
