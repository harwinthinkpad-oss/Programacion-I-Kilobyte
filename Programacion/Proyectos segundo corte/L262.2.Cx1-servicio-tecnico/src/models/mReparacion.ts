// CLASE MENOR BASE — mReparacion.ts
// Representa una orden de reparación genérica.
// Contrato polimórfico: cada hija debe implementar monto().

//Clase abstracta??
// Esta clase representa una orden de reparación genérica, así que la colocamos abstracta para que 
// no pueda ser instanciada directamente. Solo se pueden crear instancias de sus clases hijas.
export abstract class mReparacion {
  protected _orden: string;
  protected _cliente: string;
  protected _costoRepuesto: number;

  constructor({
    orden,
    cliente,
    costoRepuesto,
  }: {
    orden: string;
    cliente: string;
    costoRepuesto: number;
  }) {
    this._orden = orden.trim();
    this._cliente = cliente.trim();
    this._costoRepuesto = +costoRepuesto;
  }

  set orden(valor: string) {
    this._orden = valor.trim();
  }

  get orden(): string {
    return this._orden;
  }

  set cliente(valor: string) {
    this._cliente = valor.trim();
  }

  get cliente(): string {
    return this._cliente;
  }

  set costoRepuesto(valor: number) {
    this._costoRepuesto = +valor;
  }
  
  get costoRepuesto(): number {
    return this._costoRepuesto;
  }

  // Cargo base de diagnóstico ($5) + costo del repuesto
  protected get montoBase(): number {
    return 5 + this.costoRepuesto;
  }

  // Contrato polimórfico: cada hija calcula su propio monto final
  // puede ser abstracta porque mi clase lo es.
  // no tiene implementación, solo la firma del método. 
  // Cada clase hija debe implementar obligatoriamente este método.
  abstract monto(): number;
}
