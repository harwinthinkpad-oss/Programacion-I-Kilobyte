import Trabajador from "../../models/m/Trabajador.js";
import ITrabajadorVista from "../../interfaces/i/ITrabajadorVista.js";

export default class ControladorTrabajador {
  private callback: ((trabajador: Trabajador | null) => void) | null = null;

  constructor(private vista: ITrabajadorVista) {
    this.vista.onAceptar(() => this.aceptarTrabajador());
    this.vista.onCancelar(() => this.cancelar());
  }

  solicitarTrabajador(
    callback: (trabajador: Trabajador | null) => void,
  ): void {
    this.callback = callback;
    this.vista.mostrar();
  }

  private aceptarTrabajador(): void {
    const callback = this.callback;
    this.callback = null;
    if (callback !== null) {
      callback(
        new Trabajador(
          this.vista.nombre,
          this.vista.tipo,
          this.vista.sueldo,
          this.vista.antiguedad,
        ),
      );
    }
    this.vista.ocultar();
  }

  private cancelar(): void {
    const callback = this.callback;
    this.callback = null;
    if (callback !== null) {
      callback(null);
    }
    this.vista.ocultar();
  }
}
