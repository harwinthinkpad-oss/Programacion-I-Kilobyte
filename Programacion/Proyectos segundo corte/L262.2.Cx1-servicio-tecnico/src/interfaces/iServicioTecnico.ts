// Interfaz de la vista del Servicio Técnico (panel principal + resultados)
export interface iServicioTecnico {
  onNuevaOrden(callback: () => void): void;
  reportar(datos: {
    orden: string;
    cliente: string;
    monto: number;
    ingresoTotal: number;
    porcentajePantalla: number;
    ordenMenorMonto: string;
  }): void;
}
