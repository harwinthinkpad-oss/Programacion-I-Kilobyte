export default class TrabajadorVistaPlain {
    vista;
    inNombre;
    slTipo;
    inSueldo;
    btAceptar;
    btCancelar;
    constructor() {
        this.vista = document.getElementById("trabajador");
        this.inNombre = document.getElementById("trabajador_inNombre");
        this.slTipo = document.getElementById("trabajador_slTipo");
        this.inSueldo = document.getElementById("trabajador_inSueldo");
        this.btAceptar = document.getElementById("trabajador_btAceptar");
        this.btCancelar = document.getElementById("trabajador_btCancelar");
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
        this.vista.hidden = false;
    }
    ocultar() {
        this.vista.hidden = true;
    }
}
//# sourceMappingURL=TrabajadorVistaPlain.js.map