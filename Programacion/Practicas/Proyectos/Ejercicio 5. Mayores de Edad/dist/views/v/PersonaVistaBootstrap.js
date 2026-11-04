export default class PersonaVistaBootstrap {
    inNombre;
    inEdad;
    mensajeError;
    btAceptar;
    btCancelar;
    modal;
    constructor() {
        this.inNombre = document.getElementById("persona_inNombre");
        this.inEdad = document.getElementById("persona_inEdad");
        this.mensajeError = document.getElementById("persona_error");
        this.btAceptar = document.getElementById("persona_btAceptar");
        this.btCancelar = document.getElementById("persona_btCancelar");
        const elementoModal = document.getElementById("persona");
        if (elementoModal === null) {
            throw new Error("No se encontró el modal de la persona.");
        }
        this.modal = new bootstrap.Modal(elementoModal);
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
        this.modal.show();
        this.inNombre.focus();
    }
    ocultar() {
        this.modal.hide();
    }
    mostrarError(mensaje) {
        this.mensajeError.textContent = mensaje;
    }
}
//# sourceMappingURL=PersonaVistaBootstrap.js.map