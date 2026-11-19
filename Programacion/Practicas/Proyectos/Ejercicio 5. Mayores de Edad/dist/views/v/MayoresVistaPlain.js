export default class MayoresVistaPlain {
    botonNuevaPersona;
    botonFinalizar;
    filasPersonas;
    resultado;
    cantidadPersonas;
    cantidadMayores;
    porcentajeMayores;
    // Inicio: guardar la referencia al total de edades.
    totalEdad;
    // Fin: guardar la referencia al total de edades.
    constructor() {
        this.botonNuevaPersona = document.getElementById("body_btNuevaPersona");
        this.botonFinalizar = document.getElementById("body_btFinalizar");
        this.filasPersonas = document.getElementById("body_tbodyPersonas");
        this.resultado = document.getElementById("body_resultado");
        this.cantidadPersonas = document.getElementById("body_lblCantidadPersonas");
        this.cantidadMayores = document.getElementById("body_lblCantidadMayores");
        this.porcentajeMayores = document.getElementById("body_lblPorcentajeMayores");
        // Inicio: enlazar el elemento HTML donde se muestra el total de edades.
        this.totalEdad = document.getElementById("body_lblTotalEdad");
        // Fin: enlazar el elemento HTML donde se muestra el total de edades.
    }
    onNuevaPersona(callback) {
        this.botonNuevaPersona.onclick = callback;
    }
    onFinalizar(callback) {
        this.botonFinalizar.onclick = callback;
    }
    agregarPersona(nombre, edad) {
        const fila = document.createElement("tr");
        for (const valor of [nombre, `${edad}`, edad >= 18 ? "Sí" : "No"]) {
            const celda = document.createElement("td");
            celda.textContent = valor;
            fila.append(celda);
        }
        this.filasPersonas.append(fila);
    }
    reportar(resultado) {
        this.cantidadPersonas.textContent = `${resultado.cantidadPersonas}`;
        this.cantidadMayores.textContent = `${resultado.cantidadMayores}`;
        this.porcentajeMayores.textContent = `${resultado.porcentajeMayores.toFixed(2)}%`;
        // Inicio: mostrar el total de las edades ingresadas.
        this.totalEdad.textContent = `${resultado.totalEdad}`;
        // Fin: mostrar el total de las edades ingresadas.
        this.resultado.hidden = false;
        this.botonNuevaPersona.disabled = true;
        this.botonFinalizar.disabled = true;
    }
}
//# sourceMappingURL=MayoresVistaPlain.js.map