export type RegistroEnvio = {
  numeroGuia: string;
  tipo: "Moto" | "Bici";
  costo: number;
};

export interface iDelivery {
  onNuevoEnvio(callback: () => void): void;
  reportar({
    envio,
    totalMoto,
    totalBici,
    promedioGeneral,
    mayorPropinaMoto,
  }: {
    envio: RegistroEnvio | null;
    totalMoto: number;
    totalBici: number;
    promedioGeneral: number;
    mayorPropinaMoto: number;
  }): void;
}
