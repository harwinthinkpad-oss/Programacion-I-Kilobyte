import MCosplayer from "./mCosplayer.js";
export default class MConvencion {
    acRecaudado = 0;
    acPagoCosplayers = 0;
    cntCosplayers = 0;
    cntCosplayersArtesanales = 0;
    procesarAsistente(asistente) {
        this.acRecaudado += asistente.pago;
        if (asistente instanceof MCosplayer) {
            this.acPagoCosplayers += asistente.pago;
            this.cntCosplayers++;
            if (asistente.trajeArtesanal) {
                this.cntCosplayersArtesanales++;
            }
        }
    }
    totalRecaudado() {
        return this.acRecaudado;
    }
    promedioCosplayers() {
        if (this.cntCosplayers > 0) {
            return this.acPagoCosplayers / this.cntCosplayers;
        }
        return 0;
    }
    porcentajeCosplayersArtesanales() {
        if (this.cntCosplayers > 0) {
            return (this.cntCosplayersArtesanales / this.cntCosplayers) * 100;
        }
        return 0;
    }
}
//# sourceMappingURL=mConvencion.js.map