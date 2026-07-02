# Qué debes hacer

Construye un programa en TypeScript que gestione las reservas de asientos de un cine usando arreglos y funciones.

## Funcionalidad principal

- [] Crea una función que inicialice una matriz de asientos (un arreglo bidimensional) que represente 8 filas y 10 columnas.
- [ ] Representa los asientos ocupados con `1` y los disponibles con `0`.
- [ ] Crea una función que muestre el estado actual de la sala imprimiendo la matriz en la consola, usando:
    - `X` para los asientos ocupados.
    - `L` para los asientos libres.
- [ ] Incluye números de fila y columna para que sea fácil identificar cada posición.
- [ ] Implementa una función para reservar un asiento dado un número de fila y un número de columna (márcalo como ocupado cambiando su valor de `0` a `1`).
- [ ] Añade validación: la función debe comprobar si el asiento ya está ocupado antes de reservarlo y devolver un mensaje indicando si la operación tuvo éxito o falló.
- [ ] Crea una función que cuente y devuelva cuántos asientos están ocupados y cuántos están disponibles en toda la sala.

## Funcionalidad avanzada

- [ ] Implementa una función que busque dos asientos libres contiguos (horizontalmente, en la misma fila) y devuelva sus posiciones.
- [ ] Si se encuentran varios pares de asientos contiguos, devuelve el primero.
- [ ] Si no hay asientos contiguos disponibles, la función debe indicarlo claramente.

## Pruebas y salida por consola

- [ ] Prueba tu programa con distintos escenarios:
    - Sala vacía (todos los asientos disponibles).
    - Sala parcialmente ocupada.
    - Sala casi llena con solo asientos sueltos disponibles.
    - Sala completamente llena (sin asientos disponibles).
- [ ] Asegúrate de que tu código muestre mensajes claros para cada operación (reserva confirmada, asiento ya ocupado, asientos contiguigos encontrados, etc.).
- [ ] Agrega comentarios que expliquen qué hace cada función.

## Que vamos a evaluar

- [ ] Uso correcto de un arreglo bidimensional (matriz) para representar los asientos del cine.
- [ ] Implementación adecuada de funciones con parámetros y valores de retorno.
- [ ] Uso correcto de sentencias condicionales (`if`, `else`) para validar la disponibilidad de los asientos.
- [ ] Uso correcto de bucles (`for`, `while`) para procesar y mostrar la matriz de asientos.
- [ ] Que la función de búsqueda identifique correctamente asientos contiguos libres de forma horizontal.
- [ ] Que el código sea legible, con nombres de variables y funciones significativos.
- [ ] Que el programa se ejecute sin errores y produzca la salida esperada al probarlo.
- [ ] Que la salida por consola sea clara y útil para el personal del cine que vaya a usar el sistema.

> **Nota:** La interfaz web opcional no forma parte de los criterios de evaluación. Es únicamente para tu propio aprendizaje y experimentación con herramientas de IA.

---

### 📦 Cómo entregar este proyecto

1.  Sube tu código final a tu repositorio en GitHub.
2.  Asegúrate de que tu repositorio sea público y accesible.
3.  Entrega el enlace al repositorio siguiendo las indicaciones de tu instructor/a.