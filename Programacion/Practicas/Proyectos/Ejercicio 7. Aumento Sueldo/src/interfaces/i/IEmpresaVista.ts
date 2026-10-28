export default interface IEmpresaVista {
  onNuevoTrabajador(callback: () => void): void;
  agregarAumento(nombre: string, tipo: number, aumento: number): void;
  reportar({ totalMontoAdicional }: { totalMontoAdicional: number }): void;
}
