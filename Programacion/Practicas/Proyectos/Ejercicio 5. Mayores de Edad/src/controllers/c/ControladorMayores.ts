import mMayores from "../../models/mMayores.js";
import type IMayoresVista from "../../interfaces/i/IMayoresVista.js";
import ControladorPersona from "./ControladorPersona.js";

export default class ControladorMayores {
  private mayores: mMayores = new mMayores();
  private finalizado = false;

  constructor(
    private vista: IMayoresVista,
    private controladorPersona: ControladorPersona,
  ) {
    this.vista.onNuevaPersona(() => this.solicitarPersona());
    this.vista.onFinalizar(() => this.finalizar());
  }

  private solicitarPersona(): void {
    if (this.finalizado) {
      return;
    }

    this.controladorPersona.solicitarPersona((persona) => {
      if (persona === null) {
        return;
      }

      this.mayores.procesar(persona);
      this.vista.agregarPersona(persona.nombre, persona.edad);
    });
  }

  private finalizar(): void {
    if (this.finalizado) {
      return;
    }

    this.finalizado = true;
    this.vista.reportar({
      cantidadPersonas: this.mayores.acPersonas,
      cantidadMayores: this.mayores.contMayores,
      porcentajeMayores: this.mayores.returnPorcMayores(),
    });
  }
}
