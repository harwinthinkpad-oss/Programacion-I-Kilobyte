import mPersonas from "../models/mPersonas.js";
// Valida el formulario y convierte sus datos en un modelo antes de registrarlo.
export default class cPersona {
    vista;
    registrar;
    // Recibe la vista de captura y la función que procesa una persona válida.
    constructor(vista, registrar) {
        this.vista = vista;
        this.registrar = registrar;
        this.vista.onRegistrar(() => this.registrarPersona());
    }
    // Evita guardar nombres vacíos o códigos de sexo distintos de F=1 y M=2.
    registrarPersona() {
        const nombre = this.vista.nombre;
        const sexo = this.vista.sexo;
        // Antes se fijaba la edad en 0; ahora se lee del formulario para que el promedio use el dato real.
        const edad = this.vista.edad;
        if (nombre.length === 0) {
            this.vista.mostrarError("Escribe el nombre de la persona.");
            return;
        }
        if (sexo !== 1 && sexo !== 2) {
            this.vista.mostrarError("Selecciona Femenino o Masculino.");
            return;
        }
        if (!Number.isInteger(edad) || edad < 0 || edad > 120) {
            this.vista.mostrarError("Ingresa una edad entera entre 0 y 120.");
            return;
        }
        this.vista.mostrarError("");
        // Pasa una persona válida al contador y luego deja el formulario listo para otra.
        this.registrar(new mPersonas(sexo, nombre, edad));
        this.vista.limpiarFormulario();
    }
}
//# sourceMappingURL=cPersona.js.map