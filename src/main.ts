import "./style.css";

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
//Comprobaciones a continuación//
console.log(reservarAsiento(salaCine, 2, 4));
console.log(reservarAsiento(salaCine, 4, 6));
console.log(reservarAsiento(salaCine, 2, 5));
console.log(reservarAsiento(salaCine, 0, 0));
console.log(reservarAsiento(salaCine, 0, 1));



console.log(reservarAsiento(salaCine, 2, 4));
console.log(reservarAsiento(salaCine, 2, 5));
console.log(reservarAsiento(salaCine, 0, 1));
console.log(reservarAsiento(salaCine, 0, 2));
console.log(reservarAsiento(salaCine, 0, 3));
console.log(reservarAsiento(salaCine, 0, 4));
console.log(reservarAsiento(salaCine, 2, 5));
console.log(reservarAsiento(salaCine, 0, 1));


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


// Función para reservar un asiento por fila y columna.
function reservarAsiento(sala: number[][], fila: number, columna: number): string {
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
//////////// BUSCAR DOS ASIENTOS CONTIGUOS //////////////////
type ParAsientosContiguos = {
    fila: number;
    asientos: [number, number];
};

function buscarDosAsientosContiguos(sala: number[][]): ParAsientosContiguos | null {
    for (let fila = 0; fila < sala.length; fila++) {
        for (let columna = 0; columna < sala[fila].length - 1; columna++) {
            const asientoActual = sala[fila][columna];
            const asientoSiguiente = sala[fila][columna + 1];

            if (asientoActual === 0 && asientoSiguiente === 0) {
                return {
                    fila: fila + 1,
                    asientos: [columna + 1, columna + 2],
                };
            }
        }
    }

    return null;
}

const primerParContiguo = buscarDosAsientosContiguos(salaCine);

if (primerParContiguo) {
    console.log(
        `Primer par contiguo disponible: F${primerParContiguo.fila} - C${primerParContiguo.asientos[0]} y C${primerParContiguo.asientos[1]}`
    );
} else {
    console.log("No hay dos asientos contiguos disponibles.");
}
//////////// FIN --- BUSCAR DOS ASIENTOS CONTIGUOS //////////////////

const rowsCount = document.querySelector<HTMLElement>("#rows-count");
const columnsCount = document.querySelector<HTMLElement>("#columns-count");
const capacityCount = document.querySelector<HTMLElement>("#capacity-count");
const availableCount = document.querySelector<HTMLElement>("#available-count");
const occupiedCount = document.querySelector<HTMLElement>("#occupied-count");
const seatMap = document.querySelector<HTMLElement>("#seat-map");
const statusMessage = document.querySelector<HTMLElement>("#status-message");
const findContiguousButton = document.querySelector<HTMLButtonElement>("#find-contiguous");

function actualizarPanel(): void {
    if (!rowsCount || !columnsCount || !capacityCount || !availableCount || !occupiedCount) {
        return;
    }

    const resumen = contarAsientos(salaCine);

    rowsCount.textContent = String(salaCine.length);
    columnsCount.textContent = String(salaCine[0]?.length ?? 0);
    capacityCount.textContent = String(salaCine.length * (salaCine[0]?.length ?? 0));
    availableCount.textContent = String(resumen.disponibles);
    occupiedCount.textContent = String(resumen.ocupados);
}

function actualizarMensaje(mensaje: string): void {
    if (statusMessage) {
        statusMessage.textContent = mensaje;
    }
}

function renderSalaVisual(): void {
    if (!seatMap) {
        return;
    }

    seatMap.innerHTML = "";

    salaCine.forEach((fila, indiceFila) => {
        const row = document.createElement("div");
        row.className = "grid grid-cols-[auto_1fr] items-center gap-3";

        const rowLabel = document.createElement("div");
        rowLabel.className = "w-10 text-sm font-semibold text-slate-400";
        rowLabel.textContent = `F${indiceFila + 1}`;

        const seatsRow = document.createElement("div");
        seatsRow.className = "grid grid-cols-5 gap-2 sm:grid-cols-10";

        fila.forEach((asiento, indiceColumna) => {
            const seatButton = document.createElement("button");
            const ocupado = asiento === 1;

            seatButton.type = "button";
            seatButton.className = ocupado
                ? "rounded-xl border border-rose-300/20 bg-rose-300/80 px-3 py-3 text-xs font-bold text-slate-950 opacity-90"
                : "rounded-xl border border-emerald-300/30 bg-emerald-300 px-3 py-3 text-xs font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-slate-900";
            seatButton.textContent = `C${indiceColumna + 1}`;
            seatButton.disabled = ocupado;
            seatButton.setAttribute("aria-label", `Fila ${indiceFila + 1}, columna ${indiceColumna + 1}`);

            seatButton.addEventListener("click", () => {
                const mensaje = reservarAsiento(salaCine, indiceFila, indiceColumna);
                actualizarMensaje(`F${indiceFila + 1} C${indiceColumna + 1}: ${mensaje}`);
                renderSalaVisual();
            });

            seatsRow.appendChild(seatButton);
        });

        row.appendChild(rowLabel);
        row.appendChild(seatsRow);
        seatMap.appendChild(row);
    });

    actualizarPanel();
}

findContiguousButton?.addEventListener("click", () => {
    const siguientePar = buscarDosAsientosContiguos(salaCine);

    if (siguientePar) {
        actualizarMensaje(
            `Primer par contiguo disponible: F${siguientePar.fila}, C${siguientePar.asientos[0]} y C${siguientePar.asientos[1]}.`
        );
        return;
    }

    actualizarMensaje("No hay dos asientos contiguos disponibles.");
});

renderSalaVisual();

