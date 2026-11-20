import MAsistente from "./mAsistente.js";
export default class MCosplayer extends MAsistente {
    _grupal = false;
    _trajeArtesanal = false;
    constructor({ nombre, cedula, grupal, trajeArtesanal, }) {
        super({ nombre, cedula, tipo: "Cosplayer" });
        this.grupal = grupal;
        this.trajeArtesanal = trajeArtesanal;
    }
    get grupal() {
        return this._grupal;
    }
    set grupal(grupal) {
        this._grupal = grupal;
    }
    get trajeArtesanal() {
        return this._trajeArtesanal;
    }
    set trajeArtesanal(trajeArtesanal) {
        this._trajeArtesanal = trajeArtesanal;
    }
    get pago() {
        return this.grupal ? 4.5 : 6;
    }
}
//# sourceMappingURL=mCosplayer.js.map