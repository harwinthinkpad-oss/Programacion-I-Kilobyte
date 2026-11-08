// Vista Bootstrap: lee los campos y conecta el botón para registrar sin recargar la página.
export default class vPersonaBootstrap {
    // Referencias a los controles que presentan o reciben datos de la persona.
    formulario = document.getElementById("formPersona");
    campos = document.getElementById("camposPersona");
    entradaNombre = document.getElementById("inNombre");
    entradaSexo = document.getElementById("inSexo");
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
    // El clic registra de forma explícita; cualquier submit implícito se cancela para evitar recargas.
    onRegistrar(callback) {
        this.botonRegistrar.addEventListener("click", callback);
        this.formulario.addEventListener("submit", (evento) => {
            evento.preventDefault();
        });
    }
    // Presenta errores en rojo y oculta el mensaje cuando no hay nada que informar.
    mostrarError(mensaje) {
        this.mensajeError.textContent = mensaje;
        this.mensajeError.className = mensaje.length > 0 ? "text-danger" : "d-none";
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
//# sourceMappingURL=vPersonaBootstrap.js.map