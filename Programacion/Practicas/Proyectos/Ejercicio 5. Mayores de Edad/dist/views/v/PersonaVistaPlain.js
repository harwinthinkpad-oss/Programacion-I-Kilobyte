export default class PersonaVistaPlain {
    vista;
    inNombre;
    inEdad;
    mensajeError;
    btAceptar;
    btCancelar;
    constructor() {
        this.vista = document.getElementById("persona");
        this.inNombre = document.getElementById("persona_inNombre");
        this.inEdad = document.getElementById("persona_inEdad");
        this.mensajeError = document.getElementById("persona_error");
        this.btAceptar = document.getElementById("persona_btAceptar");
        this.btCancelar = document.getElementById("persona_btCancelar");
    }
    get nombre() {
        return this.inNombre.value.trim();
    }
    get edad() {
        return this.inEdad.value.trim() === "" ? Number.NaN : Number(this.inEdad.value);
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
    mostrar() {
        this.inNombre.value = "";
        this.inEdad.value = "";
        this.mostrarError("");
        this.vista.hidden = false;
        this.inNombre.focus();
    }
    ocultar() {
        this.vista.hidden = true;
    }
    mostrarError(mensaje) {
        this.mensajeError.textContent = mensaje;
    }
}
//# sourceMappingURL=PersonaVistaPlain.js.map