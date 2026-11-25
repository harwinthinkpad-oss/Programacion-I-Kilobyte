export type RegistroEnvio = {
  numeroGuia: string;
  tipo: "Moto" | "Bici";
  costo: number;
  tiempoEstimado: number;
};

export interface iDelivery {
  onNuevoEnvio(callback: () => void): void;
  reportar({
    envio,
    totalMoto,
    totalBici,
    promedioGeneral,
    tiempoPromedio,
  }: {
    envio: RegistroEnvio | null;
    totalMoto: number;
    totalBici: number;
    promedioGeneral: number;
    tiempoPromedio: number;
  }): void;
}
