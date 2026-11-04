import mPersona from "../../models/mPersona.js";
import type IPersonaVista from "../../interfaces/i/IPersonaVista.js";

export default class ControladorPersona {
  private callback: ((persona: mPersona | null) => void) | null = null;

  constructor(private vista: IPersonaVista) {
    this.vista.onAceptar(() => this.aceptarPersona());
    this.vista.onCancelar(() => this.cancelar());
  }

  solicitarPersona(callback: (persona: mPersona | null) => void): void {
    this.callback = callback;
    this.vista.mostrar();
  }

  private aceptarPersona(): void {
    const nombre = this.vista.nombre;
    const edad = this.vista.edad;

    if (nombre.length === 0) {
      this.vista.mostrarError("Ingresa el nombre de la persona.");
      return;
    }

    if (!Number.isInteger(edad) || edad < 0) {
      this.vista.mostrarError("Ingresa una edad válida (un número entero mayor o igual a 0).");
      return;
    }

    const callback = this.callback;
    this.callback = null;
    callback?.(new mPersona(nombre, edad));
    this.vista.ocultar();
  }

  private cancelar(): void {
    const callback = this.callback;
    this.callback = null;
    callback?.(null);
    this.vista.ocultar();
  }
}
