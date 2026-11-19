import mSuscripcion from "./mSuscripcion.js";
export default class mPlanEstudiante extends mSuscripcion {
    vigente;
    constructor(correo, vigente) {
        super(correo);
        this.vigente = vigente;
    }
    getVigente() {
        return this.vigente;
    }
    calcularCobro() {
        return this.getVigente()
            ? this.getTarifaBase() * 0.5
            : this.getTarifaBase();
    }
}
