import mTienda from "../models/mTienda.js";
import { iTienda } from "../interfaces/iTienda.js";
import cArticulo from "./cArticulo.js";

export default class cTienda {
  private mTienda: mTienda = new mTienda();
  private vTienda: iTienda;
  private cArticulo: cArticulo;

  constructor(vistaTienda: iTienda, controladorArticulo: cArticulo) {
    this.vTienda = vistaTienda;
    this.cArticulo = controladorArticulo;

    this.vTienda.onNuevoArticulo(() => this.procesar1Articulo());
  }

  private procesar1Articulo(): void {
    this.cArticulo.solicitarArticulo((articulo) => {
      if (articulo !== null) {
        this.mTienda.procesarArticulo(articulo);
        this.vTienda.reportar({
          gananciaTotal: this.mTienda.gananciaTotal(),
          codigoMayorPrecio: this.mTienda.codigoMayorPrecio(),
        });
      }
    });
  }
}