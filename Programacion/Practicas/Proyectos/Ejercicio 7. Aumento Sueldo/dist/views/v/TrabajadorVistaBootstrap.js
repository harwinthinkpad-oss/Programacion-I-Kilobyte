export default class TrabajadorVistaBootstrap {
    inNombre;
    slTipo;
    inSueldo;
    inAntiguedad;
    btAceptar;
    btCancelar;
    modal;
    constructor() {
        this.inNombre = document.getElementById("trabajador_inNombre");
        this.slTipo = document.getElementById("trabajador_slTipo");
        this.inSueldo = document.getElementById("trabajador_inSueldo");
        this.inAntiguedad = document.getElementById("trabajador_inAntiguedad");
        this.btAceptar = document.getElementById("trabajador_btAceptar");
        this.btCancelar = document.getElementById("trabajador_btCancelar");
        const elementoModal = document.getElementById("trabajador");
        if (elementoModal === null) {
            throw new Error("No se encontró el modal del trabajador.");
        }
        this.modal = new bootstrap.Modal(elementoModal);
    }
    get nombre() {
        return this.inNombre.value.trim();
    }
    get tipo() {
        return this.slTipo.value === "1" ? 1 : 2;
    }
    get sueldo() {
        return +this.inSueldo.value;
    }
    get antiguedad() {
        return +this.inAntiguedad.value;
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
    mostrar() {
        this.inNombre.value = "";
        this.slTipo.value = "1";
        this.inSueldo.value = "";
        this.inAntiguedad.value = "";
        this.modal.show();
    }
    ocultar() {
        this.modal.hide();
    }
}
//# sourceMappingURL=TrabajadorVistaBootstrap.js.map