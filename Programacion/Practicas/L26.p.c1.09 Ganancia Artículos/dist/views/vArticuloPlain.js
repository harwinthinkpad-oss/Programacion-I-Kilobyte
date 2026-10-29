export default class vArticuloPlain {
    inCodigo;
    inCosto;
    inPrecioVenta;
    btCancelar;
    btAceptar;
    vista;
    constructor() {
        this.vista = document.getElementById("articulo");
        this.inCodigo = document.getElementById("articulo_inCodigo");
        this.inCosto = document.getElementById("articulo_inCosto");
        this.inPrecioVenta = document.getElementById("articulo_inPrecioVenta");
        this.btCancelar = document.getElementById("articulo_btCancelar");
        this.btAceptar = document.getElementById("articulo_btAceptar");
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
        if (this.vista === null)
            return;
        this.inCodigo.value = "";
        this.inCosto.value = "";
        this.inPrecioVenta.value = "";
        this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
//# sourceMappingURL=vArticuloPlain.js.map