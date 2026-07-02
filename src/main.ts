//#2 CREAR LA SALA
//--------------------------------------------------------------------------------------------
// Función para crear una sala de cine con un array bidimensional que representa los asientos.
    const numeroFilas = 8;
    const numeroColumnas = 10;

function getSala():number [][]{
    // 1. Crear una matriz vacía (contenedor principal)
    const sala: number [][] = [];
   
    // 2. Añadir 8 filas
    for (let fila = 0; fila < numeroFilas; fila++) {
        const filaArray: number[] = []; // Creamos una fila vacía para este ciclo
        // Añadir 10 columnas (asientos) con valor 0 (disponibles)
        for (let columna = 0; columna < numeroColumnas; columna++) {
            filaArray.push(0)   
            ; // 0 representa asiento disponible
        }
        // Guardamos la fila completada dentro de la sala
        sala.push(filaArray);
    }
    // 3. Retornar la matriz
    return sala
}
const salaCine = getSala();
console.log("Sala:", salaCine);

//#4 CONTADOR DE ASIENTOS.
//---------------------------------------------------------------------------------------------
// Función para contar cuántos asientos están ocupados y disponibles en toda la sala.
function contarAsientos(sala: number[][]): { ocupados: number; disponibles: number } {
    let ocupados = 0;
    let disponibles = 0;
    // Recorremos cada fila y columna de la sala
    for (let fila = 0; fila < sala.length; fila++) {
        for (let columna = 0; columna < sala[fila].length; columna++) {
            if (sala[fila][columna] === 1) {
                ocupados++;
            } else {
                disponibles++;
            }
        }
    }
    return { ocupados, disponibles };
}

const contadorDeAsiento = contarAsientos(salaCine)
console.log("Contador:", contadorDeAsiento);


//////////////////// IMPRIMIR SALA - 2 //////////////////////////
//--Función para imprimir la sala e cine con formato elegible--// 
function imprimirSala(sala: number[][]): void {
    // Imprimir cabecera de columnas
    let header = "   "; // Espacio para los números de fila
    for (let i = 0; i < sala[0].length; i++) {
        header += ` C${i + 1}`;
    }
    console.log(header);

    // Imprimir filas con sus números
    for (let fila = 0; fila < sala.length; fila++) {
        // Añadimos el número de fila al principio
        let filaTexto = ` F${fila + 1} `;
        if (fila + 1 <= 9) { // Añadir espacio extra para alinear
            filaTexto = ` F${fila + 1} `;
        }
        // Recorremos cada asiento en la fila
        for (let columna = 0; columna < sala[fila].length; columna++) {
            // Verificamos si el asiento está ocupado o libre
            if (sala[fila][columna] === 0) {
                filaTexto += " L "; // L para asiento Libre
            } else {
                filaTexto += " X "; // X para asiento ocupado (1)
            }
        }
        console.log(filaTexto.trim());
    }
}
console.log ("Visualización de la Sala de Cine");

imprimirSala(salaCine)
/////////////// FIN DE IMPRIMIR SALA - 2 /////////////////////
