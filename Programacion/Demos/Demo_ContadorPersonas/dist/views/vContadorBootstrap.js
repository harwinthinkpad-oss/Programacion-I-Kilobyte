// Vista Bootstrap: refleja los acumuladores en pantalla y presenta el reporte final.
export default class vContadorBootstrap {
    // Controles de avance que cambian inmediatamente después de cada persona registrada.
    botonFinalizar = document.getElementById("btFinalizar");
    totalProcesadas = document.getElementById("lblTotalProcesadas");
    mujeresProcesadas = document.getElementById("lblMujeresProcesadas");
    hombresProcesados = document.getElementById("lblHombresProcesados");
    // Elementos del reporte que permanece oculto hasta finalizar la captura.
    seccionResultados = document.getElementById("resultados");
    totalResultado = document.getElementById("lblTotal");
    mujeresResultado = document.getElementById("lblMujeres");
    hombresResultado = document.getElementById("lblHombres");
    mensajeError = document.getElementById("mensajeFinal");
    // Conecta el botón de finalizar con la acción del controlador.
    onFinalizar(callback) {
        this.botonFinalizar.onclick = callback;
    }
    // Actualiza en la pantalla los tres acumuladores actuales, no solo el total general.
    actualizarConteos(conteos) {
        this.totalProcesadas.textContent = String(conteos.total);
        this.mujeresProcesadas.textContent = String(conteos.mujeres);
        this.hombresProcesados.textContent = String(conteos.hombres);
    }
    // Copia el conteo definitivo al reporte y lo hace visible para el usuario.
    reportar(resultados) {
        this.totalResultado.textContent = String(resultados.total);
        this.mujeresResultado.textContent = String(resultados.mujeres);
        this.hombresResultado.textContent = String(resultados.hombres);
        this.seccionResultados.hidden = false;
    }
    // Presenta el aviso de cierre o lo oculta aplicando las clases de Bootstrap.
    mostrarError(mensaje) {
        this.mensajeError.textContent = mensaje;
        this.mensajeError.className = mensaje.length > 0 ? "text-danger" : "d-none";
    }
    // Desactiva el botón de cierre para evitar repetir el reporte.
    finalizarCaptura() {
        this.botonFinalizar.disabled = true;
    }
}
//# sourceMappingURL=vContadorBootstrap.js.map