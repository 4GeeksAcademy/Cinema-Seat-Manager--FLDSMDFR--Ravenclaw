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
// Función para reservar un asiento por fila y columna.
function reservarAsiento(sala, fila, columna) {
    // Validar que la fila y columna estén dentro de los límites de la sala
    if (fila < 0 || fila >= sala.length || columna < 0 || columna >= sala[0].length) {
        return "Posición inválida.";
    }
    if (sala[fila][columna] === 1) {
        return "Asiento ocupado, no se puede reservar.";
    }
    sala[fila][columna] = 1;
    return "La reserva se ha realizado con éxito!";
}
// Ejemplo de uso:
const salaCine = getSala();
// Por ejemplo, para reservar el asiento en la fila 3, columna 5:
console.log(reservarAsiento(salaCine, 2, 4));
console.log(reservarAsiento(salaCine, 2, 5));
console.log(reservarAsiento(salaCine, 0, 1));
console.log(reservarAsiento(salaCine, 0, 2));
console.log(reservarAsiento(salaCine, 0, 3));
console.log(reservarAsiento(salaCine, 0, 4));
// Función para imprimir la sala de cine con formato legible
function imprimirSala(sala) {
    // Imprimir cabecera de columnas
    let header = "   "; // Espacio para los números de fila
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
            }
            else {
                filaTexto += " X "; // X para asiento ocupado (1)
            }
        }
        console.log(filaTexto.trim());
    }
}
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
// Función para buscar el primer par de asientos libres contiguos en la misma fila.
function buscarAsientosContiguos(sala) {
    for (let fila = 0; fila < sala.length; fila++) {
        for (let columna = 0; columna < sala[fila].length - 1; columna++) {
            if (sala[fila][columna] === 0 && sala[fila][columna + 1] === 0) {
                return {
                    primero: { fila, columna },
                    segundo: { fila, columna: columna + 1 }
                };
            }
        }
    }
    return null;
}
// Función para crear una sala completamente llena (todos los asientos ocupados).
function crearSalaLlena() {
    const sala = getSala();
    for (let fila = 0; fila < sala.length; fila++) {
        for (let columna = 0; columna < sala[fila].length; columna++) {
            sala[fila][columna] = 1;
        }
    }
    return sala;
}
// Función para mostrar un resumen de un escenario específico.
function mostrarResumenEscenario(nombre, sala) {
    console.log(`\n--- ${nombre} ---`);
    imprimirSala(sala);
    const resumen = contarAsientos(sala);
    console.log(`Asientos ocupados: ${resumen.ocupados}`);
    console.log(`Asientos disponibles: ${resumen.disponibles}`);
    const contiguos = buscarAsientosContiguos(sala);
    if (contiguos) {
        console.log(`Primer par contiguo libre: F${contiguos.primero.fila + 1}, C${contiguos.primero.columna + 1} y C${contiguos.segundo.columna + 1}.`);
    }
    else {
        console.log("No hay pares de asientos contiguos disponibles en la sala.");
    }
}
// Función para ejecutar los escenarios de prueba requeridos.
function ejecutarPruebasEscenarios() {
    // 1) Sala vacía.
    const salaVacia = getSala();
    mostrarResumenEscenario("Escenario 1: Sala vacía", salaVacia);
    // 2) Sala parcialmente ocupada.
    const salaParcial = getSala();
    reservarAsiento(salaParcial, 1, 1);
    reservarAsiento(salaParcial, 1, 2);
    reservarAsiento(salaParcial, 3, 5);
    reservarAsiento(salaParcial, 6, 0);
    mostrarResumenEscenario("Escenario 2: Sala parcialmente ocupada", salaParcial);
    // 3) Sala casi llena con asientos sueltos (sin contiguos).
    const salaCasiLlena = crearSalaLlena();
    salaCasiLlena[0][0] = 0;
    salaCasiLlena[0][2] = 0;
    salaCasiLlena[0][4] = 0;
    salaCasiLlena[0][6] = 0;
    salaCasiLlena[0][8] = 0;
    mostrarResumenEscenario("Escenario 3: Sala casi llena sin contiguos", salaCasiLlena);
    // 4) Sala completamente llena.
    const salaLlena = crearSalaLlena();
    mostrarResumenEscenario("Escenario 4: Sala completamente llena", salaLlena);
}
console.log("Visualización de la sala de cine:");
imprimirSala(salaCine);
const resumenAsientos = contarAsientos(salaCine);
console.log(`Asientos ocupados: ${resumenAsientos.ocupados}`);
console.log(`Asientos disponibles: ${resumenAsientos.disponibles}`);
const asientosContiguos = buscarAsientosContiguos(salaCine);
if (asientosContiguos) {
    console.log(`Primer par de asientos contiguos libres encontrado en F${asientosContiguos.primero.fila + 1}, C${asientosContiguos.primero.columna + 1} y C${asientosContiguos.segundo.columna + 1}.`);
}
else {
    console.log("No hay pares de asientos contiguos disponibles en la sala.");
}
console.log("\nPruebas de escenarios requeridos:");
ejecutarPruebasEscenarios();
