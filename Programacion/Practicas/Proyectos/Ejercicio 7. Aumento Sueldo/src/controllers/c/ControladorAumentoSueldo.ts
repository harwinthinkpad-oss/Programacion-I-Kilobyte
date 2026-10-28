import Empresa from "../../models/m/Empresa.js";
import Trabajador from "../../models/m/Trabajador.js";
import IEmpresaVista from "../../interfaces/i/IEmpresaVista.js";
import ControladorTrabajador from "./ControladorTrabajador.js";

export default class ControladorAumentoSueldo {
  private empresa: Empresa = new Empresa();

  constructor(
    private vista: IEmpresaVista,
    private controladorTrabajador: ControladorTrabajador,
  ) {
    this.vista.onNuevoTrabajador(() => this.solicitarTrabajador());
  }

  private solicitarTrabajador(): void {
    this.controladorTrabajador.solicitarTrabajador((trabajador) => {
      if (trabajador === null) {
        return;
      }

      this.empresa.procesarTrabajador(trabajador);
      this.vista.agregarAumento(
        trabajador.nombre,
        trabajador.tipo,
        trabajador.aumento(),
      );
      this.vista.reportar({
        totalMontoAdicional: this.empresa.totalMontoAdicional(),
      });
    });
  }
}
