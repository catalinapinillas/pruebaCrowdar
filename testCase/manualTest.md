**Fecha:** 06/04/2026  
**Nombre:** Catalina Pinilla S.

---

# Escenario Positivo: Ingreso correcto de datos de reserva.

## Escenario: Usuario logueado ingresa datos válidos de reserva y los visualiza correctamente

- Dado que me encuentro logueado en AGILEWAY
- Cuando ingreso los datos necesarios de manera correcta: origen, destino, fecha de salida, fecha de llegada
- Entonces puedo ver en la pantalla los datos ingresados acorde a lo esperado

---

# Escenario Negativo: Fecha de llegada anterior a fecha de partida

## Escenario: Usuario ingresa fechas inválidas (llegada antes que partida)

- Dado que me encuentro logueado en AGILEWAY
- Cuando ingreso: origen, destino, fecha de salida, fecha de llegada (anterior a la de partida)
- Entonces el sistema muestra un mensaje de error: "La fecha de llegada no puede ser anterior a la fecha de partida"
- Y no permite continuar con la reserva.

---

# Bug Detectado (segundo ejemplo)

**ID del Bug:** BUG-001

**Título:** El sistema permite ingresar fechas de partida y llegada en el pasado sin mostrar advertencia

## Precondiciones

Usuario logueado en AGILEWAY

## Pasos para reproducir

1. Estando logueado en AGILEWAY
2. Ingresar dentro de los datos de Campo, Origen, destino, Fecha de partida (01 october 2027), fecha de retorno (01 June 2021):

## Resultado actual (incorrecto)

El sistema acepta las fechas pasadas sin mostrar ningún mensaje de error ni advertencia y permite continuar con el proceso de reserva.

## Resultado esperado (correcto)

El sistema debe validar que las fechas de partida y llegada sean iguales o posteriores a la fecha actual del sistema, mostrando un mensaje de error como:

"No se puede reservar con fechas anteriores a la fecha actual"

## Severidad y Prioridad

- **Severidad:** Alta
- **Prioridad:** Alta