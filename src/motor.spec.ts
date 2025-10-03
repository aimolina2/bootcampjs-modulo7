import { obtenerMensajeCuandoMePlanto } from "./motor";
import { partida } from "./model";
import { vi } from "vitest";

describe("obtenerMensajeCuandoMePlanto", () => {
  it("Debería devolver 'Has sido muy conservador' si la puntuación es 3", () => {
    const resultadoEsperado: string = "Has sido muy conservador";
    const puntuacion: number = 3;
    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(puntuacion);
    const resultado: string = obtenerMensajeCuandoMePlanto();
    expect(resultado).toBe(resultadoEsperado);
  });
  it("Debería devolver 'Te ha entrado el canguelo, eh? 😏' si la puntuación es 5", () => {
    const resultadoEsperado: string = "Te ha entrado el canguelo, eh? 😏";
    const puntuacion: number = 5;
    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(puntuacion);
    const resultado: string = obtenerMensajeCuandoMePlanto();
    expect(resultado).toBe(resultadoEsperado);
  });
  it("Debería devolver 'Casi casi...' si la puntuación es 6", () => {
    const resultadoEsperado: string = "Casi casi...";
    const puntuacion: number = 6;
    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(puntuacion);
    const resultado: string = obtenerMensajeCuandoMePlanto();
    expect(resultado).toBe(resultadoEsperado);
  });
  it("Debería devolver 'Casi casi...' si la puntuación es 7", () => {
    const resultadoEsperado: string = "Casi casi...";
    const puntuacion: number = 7;
    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(puntuacion);
    const resultado: string = obtenerMensajeCuandoMePlanto();
    expect(resultado).toBe(resultadoEsperado);
  });
});
