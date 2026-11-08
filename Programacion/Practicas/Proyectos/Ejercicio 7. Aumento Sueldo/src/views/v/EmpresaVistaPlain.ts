import IEmpresaVista from "../../interfaces/i/IEmpresaVista.js";

export default class EmpresaVistaPlain implements IEmpresaVista {
  private readonly botonNuevoTrabajador: HTMLButtonElement;
  private readonly filasTrabajadores: HTMLTableSectionElement;
  private readonly totalMontoAdicional: HTMLElement;
  private readonly totalAniosServicio: HTMLElement;

  constructor() {
    this.botonNuevoTrabajador = document.getElementById(
      "body_btNuevoTrabajador",
    ) as HTMLButtonElement;
    this.filasTrabajadores = document.getElementById(
      "body_tbodyTrabajadores",
    ) as HTMLTableSectionElement;
    this.totalMontoAdicional = document.getElementById(
      "body_lblTotalMontoAdicional",
    ) as HTMLElement;
    this.totalAniosServicio = document.getElementById(
      "body_lblTotalAniosServicio",
    ) as HTMLElement;
  }

  onNuevoTrabajador(callback: () => void): void {
    this.botonNuevoTrabajador.onclick = callback;
  }

  agregarAumento(
    nombre: string,
    tipo: number,
    antiguedad: number,
    aumento: number,
  ): void {
    const fila = document.createElement("tr");
    const valores = [
      nombre,
      tipo === 1 ? "Obrero (20%)" : "Administrativo (10%)",
      `${antiguedad}`,
      `$${aumento}`,
    ];

    for (const valor of valores) {
      const celda = document.createElement("td");
      celda.textContent = valor;
      fila.append(celda);
    }

    this.filasTrabajadores.append(fila);
  }

  reportar({
    totalMontoAdicional,
    totalAniosServicio,
  }: {
    totalMontoAdicional: number;
    totalAniosServicio: number;
  }): void {
    this.totalMontoAdicional.textContent = `${totalMontoAdicional}`;
    this.totalAniosServicio.textContent = `${totalAniosServicio}`;
  }
}
