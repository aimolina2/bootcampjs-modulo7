type EstadoPartida = "ganar" | "perder" | "seguir_jugando";

interface Partida {
  puntuacion: number;
  mensaje: string;
  estadoPartida: EstadoPartida;
}

export const partida: Partida = {
  puntuacion: 0,
  mensaje: "",
  estadoPartida: "seguir_jugando",
};
