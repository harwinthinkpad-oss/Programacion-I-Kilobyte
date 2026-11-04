import type IMayoresVista from "../../interfaces/i/IMayoresVista.js";

export default class MayoresVistaBootstrap implements IMayoresVista {
  private readonly botonNuevaPersona: HTMLButtonElement;
  private readonly botonFinalizar: HTMLButtonElement;
  private readonly filasPersonas: HTMLTableSectionElement;
  private readonly resultado: HTMLElement;
  private readonly cantidadPersonas: HTMLElement;
  private readonly cantidadMayores: HTMLElement;
  private readonly porcentajeMayores: HTMLElement;

  constructor() {
    this.botonNuevaPersona = document.getElementById("body_btNuevaPersona") as HTMLButtonElement;
    this.botonFinalizar = document.getElementById("body_btFinalizar") as HTMLButtonElement;
    this.filasPersonas = document.getElementById("body_tbodyPersonas") as HTMLTableSectionElement;
    this.resultado = document.getElementById("body_resultado") as HTMLElement;
    this.cantidadPersonas = document.getElementById("body_lblCantidadPersonas") as HTMLElement;
    this.cantidadMayores = document.getElementById("body_lblCantidadMayores") as HTMLElement;
    this.porcentajeMayores = document.getElementById("body_lblPorcentajeMayores") as HTMLElement;
  }

  onNuevaPersona(callback: () => void): void {
    this.botonNuevaPersona.onclick = callback;
  }

  onFinalizar(callback: () => void): void {
    this.botonFinalizar.onclick = callback;
  }

  agregarPersona(nombre: string, edad: number): void {
    const fila = document.createElement("tr");
    for (const valor of [nombre, `${edad}`, edad >= 18 ? "Sí" : "No"]) {
      const celda = document.createElement("td");
      celda.textContent = valor;
      fila.append(celda);
    }
    this.filasPersonas.append(fila);
  }

  reportar(resultado: {
    cantidadPersonas: number;
    cantidadMayores: number;
    porcentajeMayores: number;
  }): void {
    this.cantidadPersonas.textContent = `${resultado.cantidadPersonas}`;
    this.cantidadMayores.textContent = `${resultado.cantidadMayores}`;
    this.porcentajeMayores.textContent = `${resultado.porcentajeMayores.toFixed(2)}%`;
    this.resultado.hidden = false;
    this.botonNuevaPersona.disabled = true;
    this.botonFinalizar.disabled = true;
  }
}
