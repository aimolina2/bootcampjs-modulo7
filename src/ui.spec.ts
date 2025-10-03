import { vi } from "vitest";
import { partida } from "./model";
import * as ui from "./ui";

describe("comprobarPartida", () => {
  it("Debería mostrar mensaje de ENHORABUENA cuando la puntuación es 7.5", () => {
    const puntuacion: number = 7.5;
    const mensajeEsperado: string = "¡Lo has clavado! ¡Enhorabuena! 🎉";
    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(puntuacion);
    const mensajeEspia = vi.spyOn(ui, "mostrarMensaje");
    ui.comprobarPartida();
    expect(mensajeEspia).toHaveBeenCalledWith(mensajeEsperado);
  });
});

// describe("comprobarPartida", () => {
//   it("Debería mostrar mensaje de ENHORABUENA cuando la puntuación es 7.5", () => {
//     const puntuacion: number = 7.5;
//     const mostrarMensaje: string = "¡Lo has clavado! ¡Enhorabuena! 🎉";

//     vi.spyOn(partida, "puntuacion", "get").mockReturnValue(puntuacion);
//     const spy = vi.spyOn(ui, "mostrarMensaje");

//     ui.comprobarPartida();

//     expect(spy).toHaveBeenCalledWith(mostrarMensaje);
//   });
// });

// export const comprobarPartida = (): void => {
//   if (partida.puntuacion === 7.5) {
//     mostrarMensaje("¡Lo has clavado! ¡Enhorabuena! 🎉");
//     activarModoNuevaPartida();
//   } else if (partida.puntuacion > 7.5) {
//     mostrarMensaje("☠️☠️☠️ GAME OVER Te has pasado ☠️☠️☠️");
//     activarModoNuevaPartida();
//   }
// };
