import MConvencion from "../models/mConvencion.js";
import MCosplayer from "../models/mCosplayer.js";
export default class CConvencion {
    modelo = new MConvencion();
    vista;
    controladorAsistente;
    constructor(vista, controladorAsistente) {
        this.vista = vista;
        this.controladorAsistente = controladorAsistente;
        this.vista.onNuevoAsistente(() => this.procesarAsistente());
        this.reportar(null);
    }
    procesarAsistente() {
        this.controladorAsistente.solicitarAsistente((asistente) => {
            if (asistente === null)
                return;
            this.modelo.procesarAsistente(asistente);
            this.reportar(asistente);
        });
    }
    reportar(asistente) {
        let registro = null;
        if (asistente !== null) {
            registro = {
                nombre: asistente.nombre,
                cedula: asistente.cedula,
                tipo: asistente.tipo,
                monto: asistente.pago,
                trajeArtesanal: asistente instanceof MCosplayer
                    ? asistente.trajeArtesanal
                    : null,
            };
        }
        this.vista.reportar({
            asistente: registro,
            totalRecaudado: this.modelo.totalRecaudado(),
            promedioCosplayers: this.modelo.promedioCosplayers(),
            porcentajeCosplayersArtesanales: this.modelo.porcentajeCosplayersArtesanales(),
        });
    }
}
//# sourceMappingURL=cConvencion.js.map