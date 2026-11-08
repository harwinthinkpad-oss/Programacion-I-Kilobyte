export default class vClientesPlain {
    inNombre;
    inTipoComida;
    inCantidadComida;
    inJugo;
    formulario;
    botonCancelar;
    vista;
    constructor() {
        this.vista = document.getElementById("cliente");
        this.formulario = document.getElementById("cliente_form");
        this.inNombre = document.getElementById("cliente_inNombre");
        this.inTipoComida = document.getElementById("cliente_slTipoComida");
        this.inCantidadComida = document.getElementById("cliente_inCantidadComida");
        this.inJugo = document.getElementById("cliente_ckJugo");
        this.botonCancelar = document.getElementById("cliente_btCancelar");
    }
    get nombre() {
        return this.inNombre.value.trim();
    }
    get jugo() {
        return this.inJugo.checked;
    }
    get tipocomida() {
        return Number(this.inTipoComida.value);
    }
    get cantidadcomida() {
        return Number(this.inCantidadComida.value);
    }
    mostrar() {
        this.formulario.reset();
        this.vista.hidden = false;
        this.inNombre.focus();
    }
    ocultar() {
        this.vista.hidden = true;
    }
    botonaceptar(callback) {
        this.formulario.onsubmit = (event) => {
            event.preventDefault();
            if (this.formulario.reportValidity())
                callback();
        };
    }
    botoncancelar(callback) {
        this.botonCancelar.onclick = callback;
    }
}
//# sourceMappingURL=vClientesPlain.js.map