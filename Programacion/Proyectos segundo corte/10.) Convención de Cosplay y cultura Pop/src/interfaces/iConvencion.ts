export type RegistroAsistente = {
  nombre: string;
  cedula: number;
  tipo: "Visitante" | "Cosplayer";
  monto: number;
  trajeArtesanal: boolean | null;
};

export interface iConvencion {
  onNuevoAsistente(callback: () => void): void;
  reportar({
    asistente,
    totalRecaudado,
    promedioCosplayers,
    porcentajeCosplayersArtesanales,
  }: {
    asistente: RegistroAsistente | null;
    totalRecaudado: number;
    promedioCosplayers: number;
    porcentajeCosplayersArtesanales: number;
  }): void;
}
