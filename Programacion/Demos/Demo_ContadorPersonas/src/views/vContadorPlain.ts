import type { IContador } from "../interfaces/IContador.js";

// Vista HTML plano: refleja los acumuladores en pantalla y presenta el reporte final.
export default class vContadorPlain implements IContador {
    // Controles de avance que cambian inmediatamente después de cada persona registrada.
    private readonly botonFinalizar = document.getElementById("btFinalizar") as HTMLButtonElement;
    private readonly totalProcesadas = document.getElementById("lblTotalProcesadas") as HTMLElement;
    private readonly mujeresProcesadas = document.getElementById("lblMujeresProcesadas") as HTMLElement;
    private readonly hombresProcesados = document.getElementById("lblHombresProcesados") as HTMLElement;
    private readonly edadPromedio = document.getElementById("lblEdadPromedio") as HTMLElement;

    // Elementos del reporte que permanece oculto hasta finalizar la captura.
    private readonly seccionResultados = document.getElementById("resultados") as HTMLElement;
    private readonly totalResultado = document.getElementById("lblTotal") as HTMLElement;
    private readonly mujeresResultado = document.getElementById("lblMujeres") as HTMLElement;
    private readonly hombresResultado = document.getElementById("lblHombres") as HTMLElement;
    private readonly edadPromedioResultado = document.getElementById("lblEdadPromedioFinal") as HTMLElement;
    private readonly mensajeError = document.getElementById("mensajeFinal") as HTMLElement;

    // Conecta el botón de finalizar con la acción del controlador.
    onFinalizar(callback: () => void): void {
        this.botonFinalizar.onclick = callback;
    }

    // Actualiza los conteos y el promedio de edad actuales.
    actualizarConteos(conteos: { total: number; mujeres: number; hombres: number; edadPromedio: number }): void {
        this.totalProcesadas.textContent = String(conteos.total);
        this.mujeresProcesadas.textContent = String(conteos.mujeres);
        this.hombresProcesados.textContent = String(conteos.hombres);
        this.edadPromedio.textContent = String(conteos.edadPromedio);
    }

    // Copia el conteo definitivo al reporte y lo hace visible para el usuario.
    reportar(resultados: { total: number; mujeres: number; hombres: number; edadPromedio: number }): void {
        this.totalResultado.textContent = String(resultados.total);
        this.mujeresResultado.textContent = String(resultados.mujeres);
        this.hombresResultado.textContent = String(resultados.hombres);
        this.edadPromedioResultado.textContent = String(resultados.edadPromedio);
        this.seccionResultados.hidden = false;
    }

    // Presenta el aviso al intentar cerrar sin registros o limpia el aviso anterior.
    mostrarError(mensaje: string): void {
        this.mensajeError.textContent = mensaje;
    }

    // Desactiva el botón de cierre para evitar repetir el reporte.
    finalizarCaptura(): void {
        this.botonFinalizar.disabled = true;
    }
}
