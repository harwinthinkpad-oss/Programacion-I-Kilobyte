export default class vArticuloBootstrap {
    inCodigo;
    inCosto;
    inPrecioVenta;
    btCancelar;
    btAceptar;
    modal;
    constructor() {
        this.inCodigo = document.getElementById("articulo_inCodigo");
        this.inCosto = document.getElementById("articulo_inCosto");
        this.inPrecioVenta = document.getElementById("articulo_inPrecioVenta");
        this.btCancelar = document.getElementById("articulo_btCancelar");
        this.btAceptar = document.getElementById("articulo_btAceptar");
        const elementoModal = document.getElementById("articulo");
        this.modal = new bootstrap.Modal(elementoModal);
    }
    get codigo() {
        return this.inCodigo ? +this.inCodigo.value : 0;
    }
    get costo() {
        return this.inCosto ? +this.inCosto.value : 0;
    }
    get precioVenta() {
        return this.inPrecioVenta ? +this.inPrecioVenta.value : 0;
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
    mostrar() {
        this.inCodigo.value = "";
        this.inCosto.value = "";
        this.inPrecioVenta.value = "";
        this.modal.show();
    }
    ocultar() {
        this.modal.hide();
    }
}
//# sourceMappingURL=vArticuloBootstrap.js.map