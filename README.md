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

En `motor.spec.ts` hacemos los test que nos ayudarán a:

- Probar que el número aleatorio que se genera funciona correctamente testeando la función `generarNumeroAleatorio`. Comprobamos que cuando el número random es un 0 nos devuelve un 1, y si lo que queremos es generar un 10 el número random debe ser un 0.9999 (el número random que se genera es entre 0 y 1).
- Probar que cuando este número aleatorio es mayor que 7 sume 2. Para ello hacemos test de cuando el número aleatorio es 9 suma 2, cuando es 7 no suma nada y cuando es 4 tampoco suma.
- Probar que cuando el jugador obtiene una carta se genere el valor de esa carta de forma correcta, que lo encontramos en la funcion `obtenerPuntosCarta`. Testeamos que si la carta es 3 la puntuación es 3, si la carta es 7 la puntuación es 7 y si la carta es 11 la puntuación es 0.5.
