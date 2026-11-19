import mSuscripcion from "./mSuscripcion.js";

export default class mPlanEstudiante extends mSuscripcion {
  private readonly vigente: boolean;

  constructor(correo: string, vigente: boolean) {
    super(correo);
    this.vigente = vigente;
  }

  getVigente(): boolean {
    return this.vigente;
  }

  calcularCobro(): number {
    return this.getVigente()
      ? this.getTarifaBase() * 0.5
      : this.getTarifaBase();
  }
}
