export default class vVendedorPlain {
    constructor() {
        this.vista = document.getElementById("vendedor");
        this.formulario = document.getElementById("vendedor_form");
        this.entradaNombre = document.getElementById("vendedor_inNombre");
        this.entradaMontoVenta = document.getElementById("vendedor_inMontoVenta");
        this.botonCancelar = document.getElementById("vendedor_btCancelar");
    }

    get nombre() {
        return this.entradaNombre.value.trim();
    }

    get montoVenta() {
        return Number(this.entradaMontoVenta.value);
    }

    onAceptar(callback) {
        this.formulario.onsubmit = (event) => {
            event.preventDefault();
            callback();
        };
    }

    onCancelar(callback) {
        this.botonCancelar.onclick = callback;
    }

    mostrar() {
        this.formulario.reset();
        this.vista.hidden = false;
        this.entradaNombre.focus();
    }

    ocultar() {
        this.vista.hidden = true;
    }
}
