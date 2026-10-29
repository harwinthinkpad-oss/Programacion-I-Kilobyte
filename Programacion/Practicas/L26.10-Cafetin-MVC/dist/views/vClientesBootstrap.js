export default class vClientesBootstrap {
    inNombre;
    inTipoComida;
    inCantidadComida;
    inJugo;
    formulario;
    botonCancelar;
    modal;
    constructor() {
        this.inNombre = document.getElementById("cliente_inNombre");
        this.inTipoComida = document.getElementById("cliente_slTipoComida");
        this.inCantidadComida = document.getElementById("cliente_inCantidadComida");
        this.inJugo = document.getElementById("cliente_ckJugo");
        this.formulario = document.getElementById("cliente_form");
        this.botonCancelar = document.getElementById("cliente_btCancelar");
        const elementoModal = document.getElementById("cliente");
        this.modal = new bootstrap.Modal(elementoModal);
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
        this.modal.show();
        this.inNombre.focus();
    }
    ocultar() {
        this.modal.hide();
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
//# sourceMappingURL=vClientesBootstrap.js.map