export default interface IEmpresaVista {
  onNuevoTrabajador(callback: () => void): void;
  agregarAumento(
    nombre: string,
    tipo: number,
    antiguedad: number,
    aumento: number,
  ): void;
  reportar({
    totalMontoAdicional,
    totalAniosServicio,
  }: {
    totalMontoAdicional: number;
    totalAniosServicio: number;
  }): void;
}
