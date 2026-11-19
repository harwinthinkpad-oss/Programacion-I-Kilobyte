import mPlanEstudiante from "./mPlanEstudiante.js";
export default class mPlataforma {
    cobros = [];
    acIngresoTotal = 0;
    cntEstudiantesVigentes = 0;

    procesarSuscripcion(suscripcion) {
        const cobroUsuario = {
            correo: suscripcion.getCorreo(),
            cobro: suscripcion.calcularCobro(),
        };
        this.cobros.push(cobroUsuario);
        this.acIngresoTotal += cobroUsuario.cobro;
        if (suscripcion instanceof mPlanEstudiante &&
            suscripcion.getVigente()) {
            this.cntEstudiantesVigentes++;
        }
        return { ...cobroUsuario };
    }
    getCobros() {
        return this.cobros.map((cobro) => ({ ...cobro }));
    }
    ingresoTotal() {
        return this.acIngresoTotal;
    }
    cantEstudiantesVigentes() {
        return this.cntEstudiantesVigentes;
    }
}
