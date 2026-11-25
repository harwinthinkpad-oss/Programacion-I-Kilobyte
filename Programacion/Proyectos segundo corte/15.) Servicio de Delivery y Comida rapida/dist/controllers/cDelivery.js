import MDelivery from "../models/mDelivery.js";
import MMoto from "../models/mMoto.js";
export default class CDelivery {
    modelo = new MDelivery();
    vista;
    controladorEnvio;
    constructor(vista, controladorEnvio) {
        this.vista = vista;
        this.controladorEnvio = controladorEnvio;
        this.vista.onNuevoEnvio(() => this.procesarEnvio());
        this.reportar(null);
    }
    procesarEnvio() {
        this.controladorEnvio.solicitarEnvio((envio) => {
            if (envio !== null) {
                this.modelo.procesar(envio);
                this.reportar({
                    numeroGuia: envio.numeroGuia,
                    tipo: envio instanceof MMoto ? "Moto" : "Bici",
                    costo: envio.costoEnvio,
                    tiempoEstimado: envio.tiempoEstimado(),
                });
            }
        });
    }
    reportar(envio) {
        this.vista.reportar({
            envio,
            totalMoto: this.modelo.totalMoto(),
            totalBici: this.modelo.totalBici(),
            promedioGeneral: this.modelo.promedioGeneral(),
            tiempoPromedio: this.modelo.tiempoPromedio(),
            mayorPropinaMoto: this.modelo.mayorPropinaMoto(),
        });
    }
}
//# sourceMappingURL=cDelivery.js.map