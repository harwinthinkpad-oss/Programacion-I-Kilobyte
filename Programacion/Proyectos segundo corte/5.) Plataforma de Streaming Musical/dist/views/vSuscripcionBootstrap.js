export default class vSuscripcionBootstrap {
    formulario;
    inCorreo;
    slTipoPlan;
    slCarnetVigente;
    btCancelar;
    lblError;
    modal;
    constructor() {
        const elementoModal = document.getElementById("suscripcion");
        this.formulario = document.getElementById("suscripcion_form");
        this.inCorreo = document.getElementById("suscripcion_inCorreo");
        this.slTipoPlan = document.getElementById("suscripcion_slTipoPlan");
        this.slCarnetVigente = document.getElementById("suscripcion_slCarnetVigente");
        this.btCancelar = document.getElementById("suscripcion_btCancelar");
        this.lblError = document.getElementById("suscripcion_lblError");
        this.modal = new bootstrap.Modal(elementoModal);
        this.slTipoPlan.onchange = () => this.actualizarCarnet();
        this.actualizarCarnet();
    }
    get correo() {
        return this.inCorreo.value.trim();
    }
    get tipoPlan() {
        return this.slTipoPlan.value;
    }
    get carnetVigente() {
        return this.slCarnetVigente.value === "si";
    }
    validarFormulario() {
        this.mostrarError("");
        if (!this.formulario.reportValidity())
            return false;
        if (this.tipoPlan !== "estudiante" && this.tipoPlan !== "duo") {
            this.mostrarError("Selecciona un tipo de plan válido.");
            return false;
        }
        if (this.tipoPlan === "estudiante" &&
            this.slCarnetVigente.value !== "si" &&
            this.slCarnetVigente.value !== "no") {
            this.mostrarError("Selecciona si el carnet está vigente.");
            return false;
        }
        return true;
    }
    mostrar() {
        this.modal.show();
    }
    ocultar() {
        this.modal.hide();
    }
    limpiarFormulario() {
        this.formulario.reset();
        this.actualizarCarnet();
        this.mostrarError("");
    }
    mostrarError(mensaje) {
        this.lblError.textContent = mensaje;
        this.lblError.hidden = mensaje.length === 0;
    }
    onAceptar(callback) {
        this.formulario.onsubmit = (evento) => {
            evento.preventDefault();
            callback();
        };
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
    actualizarCarnet() {
        const esEstudiante = this.slTipoPlan.value === "estudiante";
        this.slCarnetVigente.disabled = !esEstudiante;
        if (!esEstudiante)
            this.slCarnetVigente.value = "no";
    }
}
