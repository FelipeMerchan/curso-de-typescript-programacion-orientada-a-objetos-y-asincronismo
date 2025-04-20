/*
  Genéricos
  Permiten versatilidad en el código y tener cosas abstractas y funcionales a la vez.
*/

import { Dog } from "./09-protected";

/*
Si queremos vovler algo dinámico el tipo de parámetro que recibimos
podría tener estas 2 opciones, sin embargo, no son muy mantenibles:
function getValue(value: unknown) {
  return value;
}

function getValue(value: string | number) {
  return value;
} */

/* Podemos enviar el tipado como si fuera un parámetro y para recibirlo
lo podemos hacer dentro de un <>: */
function getValue<myType, myType2>(value: myType) {
  /* Podemos usar myType2 tanto para tipar un parámetro como para
  tipar cualquier cosa dentro de la función. */
  const array: myType[] = [value];
  return value;
}

/* Así enviamos el tipado como si fuera un parámetro,
podemos enviar varios tipados separados por una coma (<number, string>) */
getValue<number, string>(12).toFixed;
getValue<string, Array<string>>('12').toLowerCase();
getValue<[number, string], string[]>([11, 'sd']).forEach((item) => item);
const fifi = new Dog('Fifi', 'Felipe');
/* Los generics también pueden aceptar cualquier otro tipo como una clase:  */
getValue<Dog, string>(fifi);

/* El nombre myType puede ser cualquiera que permita identificar el tipado
que se está enviando. Normalmente encontraremos T. */
