export default class vPersonaPlain {
    formulario = document.getElementById("formPersona");
    entradaNombre = document.getElementById("inNombre");
    entradaIngresos = document.getElementById("inIngresos");
    mensajeError = document.getElementById("mensajeError");
    botonAceptar = document.getElementById("btAceptar");
    botonCancelar = document.getElementById("btCancelar");
    get nombre() {
        return this.entradaNombre.value.trim();
    }
    get ingresos() {
        const valor = this.entradaIngresos.value.trim();
        return valor === "" ? Number.NaN : Number(valor);
    }
    mostrar() {
        this.entradaNombre.value = "";
        this.entradaIngresos.value = "";
        this.mostrarError("");
        this.formulario.hidden = false;
        this.entradaNombre.focus();
    }
    ocultar() {
        this.formulario.hidden = true;
    }
    mostrarError(mensaje) {
        this.mensajeError.textContent = mensaje;
    }
    onAceptar(callback) {
        this.botonAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.botonCancelar.onclick = callback;
    }
}
//# sourceMappingURL=vPersonaPlain.js.map