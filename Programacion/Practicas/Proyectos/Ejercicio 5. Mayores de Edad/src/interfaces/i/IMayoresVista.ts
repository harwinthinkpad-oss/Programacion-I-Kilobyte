export default interface IMayoresVista {
  onNuevaPersona(callback: () => void): void;
  onFinalizar(callback: () => void): void;
  agregarPersona(nombre: string, edad: number): void;
  reportar(resultado: {
    cantidadPersonas: number;
    cantidadMayores: number;
    porcentajeMayores: number;
    totalEdad: number;
  }): void;
}
