/** * funcion generarTablero * @param numFilas * @param numColumnas * @param caracterRelleno * @return tablero */

function crearTablero(numFilas, numColumnas, caracterRelleno) {
    const tablero = [];
    for (let i = 0; i < numFilas; i++) {
      const fila = [];
      for (let j = 0; j < numColumnas; j++) {
        fila.push(caracterRelleno);
      }
      tablero.push(fila);
    }
    return tablero;
  }
  
  function mostrarTablero(tablero) {
    for (let i = 0; i < tablero.length; i++) {
      console.log(tablero[i]);
      // for (let j = 0; j < tablero[i]; j++){
      //     console.log(tablero[i][j]);
      // }
    }
    console.log("");
  }
  
  /** * funcion rellenarPosicion * que dado un tablero, una posición y un caracter de relleno, pinte ese caracter
   * * en el tablero
   * * @param tablero
   * * @param posicion {x: number, y: number}
   * * @param caracterRelleno
   * * @return void
   * */
  
  function rellenarPosicion(tablero, posicion, caracterRelleno) {
    tablero[posicion.x][posicion.y] = caracterRelleno;
  }
  
  function rellenarPosiciones2(tablero, posicion, caracterRelleno1, caracterRelleno2) {
    tablero[posicion.x][posicion.y] = caracterRelleno1;
    tablero[posicion.x+1][posicion.y]=caracterRelleno2
  }
  
  function rellenarPosiciones2Horizontal(tablero, posicion, caracterRelleno1, caracterRelleno2) {
    tablero[posicion.x][posicion.y] = caracterRelleno1;
    tablero[posicion.x][posicion.y+1]=caracterRelleno2
  }
  /** * funcion obtenerCaracterEnPosicion
   * * @param tablero string[][]
   * * @param posicion {x: number, y: number}
   * * @return caracter string
   * *
   */
  
  function obtenerCaracterEnPosicion(tablero, posicion) {
    return tablero[posicion.x][posicion.y];
  }
  
  function obtenerRandomEntre(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  
  // function colocarBarcoAleatorio(tablero) {
  //   tablero[obtenerRandomEntre(0, tablero.length - 1)]
  //     [obtenerRandomEntre(0, tablero[0].length - 1)];
  //   rellenarPosicion(tablero, posicion, "B");
  // }
  const posicion = { x: 0, y: 0 };
  
  function colocarBarcoAleatorio(tablero) {
    posicion.x = obtenerRandomEntre(0, tablero.length - 1);
    posicion.y = obtenerRandomEntre(0, tablero[0].length - 1);
    rellenarPosicion(tablero, posicion, " B ");
  }
  
  function colocarBarcoAleatorio2Vertical(tablero) {
    posicion.x = obtenerRandomEntre(0, tablero.length - 2);
    posicion.y = obtenerRandomEntre(0, tablero[0].length - 1);
    rellenarPosiciones2(tablero, posicion, "BV1",'BV2');
  }
  
  function colocarBarcoAleatorio2Horizontal(tablero) {
    posicion.x = obtenerRandomEntre(0, tablero.length - 1);
    posicion.y = obtenerRandomEntre(0, tablero[0].length - 2);
    rellenarPosiciones2Horizontal(tablero, posicion, "BH1",'BH2');
  }
  
  
  function colocarMuchosBarcos(tablero, cuantos) { // De esta forma se coloca un barco de cada tipo (B, BV y BH)
    for (let i = 0; i < cuantos; i++) { //Para elegir cuantos barcos de cada tipo colocar borramos las lineas 90 y 91
      colocarBarcoAleatorio(tablero); //y creamos las funciones de las lineas 95 y 101. Yo he hecho las dos formas pero
      colocarBarcoAleatorio2Vertical(tablero) //solo "imprimo" la primera
      colocarBarcoAleatorio2Horizontal(tablero)
    }
  } 
  
  function colocarMuchosBarcos2Vertical(tablero, cuantos) {
    for (let i = 0; i < cuantos; i++) {
      colocarBarcoAleatorio2Vertical(tablero);
    }
  }
  
  function colocarMuchosBarcos2Horizontal(tablero, cuantos) {
    for (let i = 0; i < cuantos; i++) {
      colocarBarcoAleatorio2Horizontal(tablero);
    }
  }
  
  /** * funcion disparar
   * * dice si ha tocado un barco, y en caso de tocarlo, cambia la 'B' por 'X'
   * * @param tablero :string[][]
   * * @param posicionDisparo: {x:number, y:number}
   * * @return tocado: boolean */
  
  function disparar(tablero, posicionDisparo) {
    if (tablero[posicionDisparo.x][posicionDisparo.y] !== "") {
      tablero[posicionDisparo.x][posicionDisparo.y] = " X ";
      return true;
    } else {
      return false;
    }
  }
  
  
  
  const tablero = crearTablero(6, 6, "   "); //aumento el tablero para tener mas juego para colocar barcos
  // mostrarTablero(tablero);
  //rellenarPosicion(tablero, { x: 2, y: 3 }, "X");
  // mostrarTablero(tablero);
  // colocarBarcoAleatorio(tablero);
  // mostrarTablero(tablero);
  colocarMuchosBarcos(tablero, 2);
  // colocarMuchosBarcos2Vertical(tablero,2)
  // colocarMuchosBarcos2Horizontal(tablero,2)
  mostrarTablero(tablero);
  console.log(disparar(tablero, { x: 1, y: 0 }));
  mostrarTablero(tablero);
  console.log(disparar(tablero, { x: 1, y: 3 }));
  mostrarTablero(tablero);
  console.log(disparar(tablero, { x: 2, y: 1 }));
  mostrarTablero(tablero);
  