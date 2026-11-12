// Vista HTML plano: lee los campos y conecta el botón para registrar sin recargar la página.
export default class vPersonaPlain {
    // Referencias a los controles que presentan o reciben datos de la persona.
    formulario = document.getElementById("formPersona");
    campos = document.getElementById("camposPersona");
    entradaNombre = document.getElementById("inNombre");
    entradaSexo = document.getElementById("inSexo");
    entradaEdad = document.getElementById("inEdad");
    mensajeError = document.getElementById("mensajePersona");
    botonRegistrar = document.getElementById("btRegistrar");
    // Recorta espacios al principio y al final para no aceptar un nombre en blanco.
    get nombre() {
        return this.entradaNombre.value.trim();
    }
    // Convierte las opciones F=1 y M=2 al número que espera el modelo.
    get sexo() {
        return this.entradaSexo.value === "" ? Number.NaN : Number(this.entradaSexo.value);
    }
    get edad() {
        return this.entradaEdad.value === "" ? Number.NaN : Number(this.entradaEdad.value);
    }
    // El clic registra de forma explícita; cualquier submit implícito se cancela para evitar recargas.
    onRegistrar(callback) {
        this.botonRegistrar.addEventListener("click", callback);
        this.formulario.addEventListener("submit", (evento) => {
            evento.preventDefault();
        });
    }
    // Presenta el error de validación bajo los campos, o lo limpia si está vacío.
    mostrarError(mensaje) {
        this.mensajeError.textContent = mensaje;
    }
    // Limpia solo los campos del formulario; los acumuladores del modelo permanecen intactos.
    limpiarFormulario() {
        this.formulario.reset();
        this.mostrarError("");
        this.entradaNombre.focus();
    }
    // Bloquea nombre, sexo y botón para impedir registros después del reporte final.
    finalizarCaptura() {
        this.campos.disabled = true;
    }
}
//# sourceMappingURL=vPersonaPlain.js.map