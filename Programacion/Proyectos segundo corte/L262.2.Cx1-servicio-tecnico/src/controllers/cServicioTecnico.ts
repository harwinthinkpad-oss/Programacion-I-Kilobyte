// #region - Enunciado: SERVICIO TÉCNICO Y REPARACIÓN DE SMARTPHONES
/** 
  En el módulo de recepción de un taller técnico (clase mayor: mServicioTecnico) se registran las órdenes de reparación 
  (clase menor base: mReparacion), conociendo el número de orden, el nombre del cliente y el costo del repuesto, sabiendo 
  que toda reparación incluye un cargo base de diagnóstico de $5 sumado al costo del repuesto. 
  Se atienden dos servicios especializados:

- Cambio de Pantalla (mPantalla): al monto base le suma $15 de mano de obra especializada; además, si la pantalla instalada 
  es calidad OLED original, aplica un recargo del 20% sobre el subtotal acumulado.
- Cambio de Batería y Puerto (mBateria): al monto base le suma $8 por instalación; además, si el cliente entrega la batería 
  dañada para reciclaje, otorga un descuento fijo de $3 sobre el monto resultante.
- Se requiere calcular el monto a pagar por cada orden, el ingreso total del taller, el porcentaje de ingresos que provienen 
  de cambios de pantalla y el número de orden con el menor monto a pagar.

Datos de entrada:
  Orden: R01, Cliente: Mateo, Repuesto: 30, Tipo: Pantalla, OLED: Sí
  Orden: R02, Cliente: Camila, Repuesto: 12, Tipo: Batería, Reciclaje: Sí
  Orden: R03, Cliente: Diego, Repuesto: 25, Tipo: Pantalla, OLED: No
  Orden: R04, Cliente: Valeria, Repuesto: 15, Tipo: Batería, Reciclaje: No

La salida requerida presenta el siguiente formato:
  Orden R01 (Mateo): $60.00
  Orden R02 (Camila): $22.00
  Orden R03 (Diego): $45.00
  Orden R04 (Valeria): $28.00

  Ingreso total del taller: $155.00
  Porcentaje de ingresos por cambio de pantalla: 67.74%
  Orden con menor monto a pagar: R02
*/
// #endregion

import mServicioTecnico from "../models/mServicioTecnico.js";
import { iServicioTecnico } from "../interfaces/iServicioTecnico.js";
import cReparacion from "./cReparacion.js";

export default class cServicioTecnico {
  private mServicioTecnico: mServicioTecnico = new mServicioTecnico();
  private vServicioTecnico: iServicioTecnico;
  private cReparacion: cReparacion;

  constructor(vistaServicio: iServicioTecnico, controladorReparacion: cReparacion) {
    this.vServicioTecnico = vistaServicio;
    this.cReparacion = controladorReparacion;

    this.vServicioTecnico.onNuevaOrden(() => this.procesar1Orden());
  }

  private procesar1Orden(): void {
    this.cReparacion.solicitarReparacion((reparacion) => {
      if (reparacion !== null) {
        this.mServicioTecnico.procesar(reparacion);

        this.vServicioTecnico.reportar({
          orden: reparacion.orden,
          cliente: reparacion.cliente,
          monto: reparacion.monto(),
          ingresoTotal: this.mServicioTecnico.ingresoTotal,
          porcentajePantalla: this.mServicioTecnico.porcentajePantalla(),
          ordenMenorMonto: this.mServicioTecnico.ordenMenorMonto,
        });
      }
    });
  }
}
