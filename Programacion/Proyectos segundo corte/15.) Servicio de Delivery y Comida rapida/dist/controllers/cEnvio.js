import MBici from "../models/mBici.js";
import MMoto from "../models/mMoto.js";
export default class CEnvio {
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
        this.vista.onCancelar(() => this.cancelar());
        this.vista.onAceptar(() => this.aceptar());
    }
    solicitarEnvio(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    cancelar() {
        this.callback(null);
        this.vista.ocultar();
    }
    aceptar() {
        const datos = {
            numeroGuia: this.vista.numeroGuia,
            montoPedido: this.vista.montoPedido,
        };
        let envio;
        if (this.vista.tipo === "Moto") {
            envio = new MMoto({ ...datos, distancia: this.vista.distancia });
        }
        else {
            envio = new MBici({
                ...datos,
                bolsaTermica: this.vista.bolsaTermica,
                horaPico: this.vista.horaPico,
            });
        }
        this.callback(envio);
        this.vista.ocultar();
    }
}
//# sourceMappingURL=cEnvio.js.map