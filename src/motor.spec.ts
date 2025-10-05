import {
  obtenerMensajeCuandoMePlanto,
  generarNumeroAleatorio,
  generarNumeroCarta,
  obtenerPuntosCarta,
} from "./motor";
import { partida } from "./model";
import { vi } from "vitest";

describe("obtenerPuntosCarta", () => {
  it("Cuando la carta es un 3, debería devolver 3", () => {
    const carta: number = 3;
    const puntosEsperados: number = 3;
    const resultado: number = obtenerPuntosCarta(carta);
    expect(resultado).toBe(puntosEsperados);
  });
  it("Cuando la carta es un 7, debería devolver 7", () => {
    const carta: number = 7;
    const puntosEsperados: number = 7;
    const resultado: number = obtenerPuntosCarta(carta);
    expect(resultado).toBe(puntosEsperados);
  });
  it("Cuando la carta es un 11, debería devolver 0.5", () => {
    const carta: number = 11;
    const puntosEsperados: number = 0.5;
    const resultado: number = obtenerPuntosCarta(carta);
    expect(resultado).toBe(puntosEsperados);
  });
});

describe("generarNumeroAleatorio", () => {
  it("MathRandom lo forzamos para que devuelva 1, debería devolver 1", () => {
    const numeroEsperado: number = 1;
    vi.spyOn(global.Math, "random").mockReturnValue(0);
    const resultado: number = generarNumeroAleatorio();
    expect(resultado).toBe(numeroEsperado);
  });
  it("MathRandom lo forzamos para que devuelva 10, debería devolver 10", () => {
    const numeroEsperado: number = 10;
    vi.spyOn(global.Math, "random").mockReturnValue(0.9999999);
    const resultado: number = generarNumeroAleatorio();
    expect(resultado).toBe(numeroEsperado);
  });
});

describe("generarNumeroCarta", () => {
  it("Cuando el número aleatorio es 9, debería devolver la carta con puntuación 11", () => {
    const numeroAleatorio: number = 9;
    const numeroCartaEsperado: number = 11;
    const resultado: number = generarNumeroCarta(numeroAleatorio);
    expect(resultado).toBe(numeroCartaEsperado);
  });
  it("Cuando el número aleatorio es 7, debería devolver la carta con puntuación 7", () => {
    const numeroAleatorio: number = 7;
    const numeroCartaEsperado: number = 7;
    const resultado: number = generarNumeroCarta(numeroAleatorio);
    expect(resultado).toBe(numeroCartaEsperado);
  });
  it("Cuando el número aleatorio es 4, debería devolver la carta con puntuación 4", () => {
    const numeroAleatorio: number = 4;
    const numeroCartaEsperado: number = 4;
    const resultado: number = generarNumeroCarta(numeroAleatorio);
    expect(resultado).toBe(numeroCartaEsperado);
  });
});

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
