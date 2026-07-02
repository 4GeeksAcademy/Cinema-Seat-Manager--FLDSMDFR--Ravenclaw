console.log("Hola desde main.ts");
// Función para crear una sala de cine con un array bidimensional que representa los asientos.
function getSala() {
    // 1. Crear una matriz vacía (contenedor principal)
    const sala = [];
    // 2. Añadir 8 filas
    for (let fila = 0; fila < 8; fila++) {
        const filaArray = []; // Creamos una fila vacía para este ciclo
        // Añadir 10 columnas (asientos) con valor 0 (disponibles)
        for (let columna = 0; columna < 10; columna++) {
            filaArray.push(0); // 0 representa asiento disponible
        }
        // Guardamos la fila completada dentro de la sala
        sala.push(filaArray);
    }
    // 3. Retornar la matriz
    return sala;
}
// Ejemplo de uso:
const salaCine = getSala();
// Para cambiar un asiento a 1 (reservado), accedemos por: salaCine[fila][columna]
// Nota: En programación los índices empiezan en 0. 
// Por ejemplo, para reservar el asiento en la fila 3, columna 5:
salaCine[2][4] = 1; // Asiento ocupado
salaCine[5][7] = 1; // Otro asiento ocupado
// Función para imprimir la sala de cine con formato legible
function imprimirSala(sala) {
    for (let fila = 0; fila < sala.length; fila++) {
        // Por cada fila, recorremos las columnas
        let filaTexto = "";
        // Recorremos cada asiento en la fila
        for (let columna = 0; columna < sala[fila].length; columna++) {
            // Verificamos si el asiento está ocupado o libre
            if (sala[fila][columna] === 0) {
                filaTexto += "L "; // L para asiento Libre
            }
            else {
                filaTexto += "X "; // X para asiento ocupado (1)
            }
        }
        console.log(`Fila ${fila + 1}: ${filaTexto.trim()}`);
    }
}
console.log("Visualización de la sala de cine:");
imprimirSala(salaCine);
