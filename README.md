# Laboratorio módulo 7 - Testing. Juego siete y medio

Para desarrollar este proyecto partimos de los archivos del proyecto presentado en el anterior laboratorio donde desarrollamos el "Juego siete y medio".

Pasos:

- Clonate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).

## 1. Funciones que determinan si un jugador gana o no

En `comprobarPartida`que se encuentra en el fichero ui.ts resolvemos si una persona gana la partida al conseguir un 7,5 o si pierde al pasarse.
Pero, también podemos testear que mensaje se nos muestra cuando no hemos alcanzado esa puntuación al plantarnos antes con la función `obtenerMensajeCuandoMePlanto`que está en motor.ts.

## 2. Crear tests sobre esas funciones importando los módulos necesarios

Creamos los archivos _ui.spec.ts_ y _motor.spec.ts_ para poder desarrollar los tests.

## 3. Pruebas unitarias para comprobar las funciones que generan número aleatorio y asignacion a la carta
