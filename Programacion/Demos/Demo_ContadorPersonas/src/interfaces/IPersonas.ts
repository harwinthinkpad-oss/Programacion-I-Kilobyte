// Contrato de la vista que permite ingresar los datos de cada persona.
export interface IPersonas {
    // Datos escritos y seleccionados en el formulario.
    readonly nombre: string;
    readonly sexo: number;
    readonly edad: number;

    // Conecta el botón Registrar con el controlador sin enviar el formulario.
    onRegistrar(callback: () => void): void;

    // Informa errores de validación sin borrar los datos ingresados.
    mostrarError(mensaje: string): void;

    // Limpia el formulario después de registrar una persona.
    limpiarFormulario(): void;

    // Bloquea el formulario cuando termina la captura.
    finalizarCaptura(): void;
}