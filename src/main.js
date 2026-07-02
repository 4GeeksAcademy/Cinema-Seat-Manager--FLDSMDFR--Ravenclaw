//#2 CREAR LA SALA
//--------------------------------------------------------------------------------------------
// Función para crear una sala de cine con un array bidimensional que representa los asientos.
const numeroFilas = 8;
const numeroColumnas = 10;
function getSala() {
    // 1. Crear una matriz vacía (contenedor principal)
    const sala = [];
    // 2. Añadir 8 filas
    for (let fila = 0; fila < numeroFilas; fila++) {
        const filaArray = []; // Creamos una fila vacía para este ciclo
        // Añadir 10 columnas (asientos) con valor 0 (disponibles)
        for (let columna = 0; columna < numeroColumnas; columna++) {
            filaArray.push(0); // 0 representa asiento disponible
        }
        // Guardamos la fila completada dentro de la sala
        sala.push(filaArray);
    }
    // 3. Retornar la matriz
    return sala;
}
const salaCine = getSala();
//#4 CONTADOR DE ASIENTOS.
//---------------------------------------------------------------------------------------------
// Función para contar cuántos asientos están ocupados y disponibles en toda la sala.
function contarAsientos(sala) {
    let ocupados = 0;
    let disponibles = 0;
    // Recorremos cada fila y columna de la sala
    for (let fila = 0; fila < sala.length; fila++) {
        for (let columna = 0; columna < sala[fila].length; columna++) {
            if (sala[fila][columna] === 1) {
                ocupados++;
            }
            else {
                disponibles++;
            }
        }
    }
    return { ocupados, disponibles };
}
const contadorDeAsiento = contarAsientos(salaCine);
