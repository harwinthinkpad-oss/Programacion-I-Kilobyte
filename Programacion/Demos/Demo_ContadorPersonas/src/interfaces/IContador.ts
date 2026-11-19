// Contrato de las acciones y salidas de la vista que presenta los conteos.
export interface IContador {
    // Conecta el botón de cierre de captura con el controlador.
    onFinalizar(callback: () => void): void;

    // Refresca los conteos y el promedio de edad después de cada registro.
    actualizarConteos(conteos: { total: number; mujeres: number; hombres: number; edadPromedio: number }): void;

    // Muestra los resultados finales de la captura.
    reportar(resultados: { total: number; mujeres: number; hombres: number; edadPromedio: number }): void;

    // Presenta un mensaje relacionado con el cierre de la captura.
    mostrarError(mensaje: string): void;

    // Evita que la captura pueda cerrarse más de una vez.
    finalizarCaptura(): void;
}