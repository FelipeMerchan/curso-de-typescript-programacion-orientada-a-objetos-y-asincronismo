const date = new Date();
date.getHours();
date.getTime();
date.toISOString();

const date2 = new Date(1993, 1, 12); // 0 es enero, es decir, los meses empiezan en el número 0
date.getHours();
date.getTime();
date.toISOString();

console.log({ date });
console.log({ date2 });

/* Las clases vienen soportadas en es6 */
export class MyDate {
  /* Para crear propiedades dentro de una clase debemos hacerlo de la
  siguiente forma: */
  year: number = 0;
  month: number;
  day: number;
  /* En las clases es obligatorio que inicialicemos las propiedades,
  es decir, no podemos crear propiedades sin un valor como: year: number;
  , debemos asignar un valor: year: number = 0;
  También podemos inicializar una propiedad en el constructor, así por ejemplo,
  month y day no tienen un valor, pero son inicializados usando el constructor
  y en este asignamos el valor: */
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

const myDate = new MyDate(1995, 8, 29);
console.log({ myDate });

/* npx lo usamos cuando queremos correr alguna dependencia que está instalada
de forma local para no tener que instalarla de forma global. Cuando
tenemos dependencias instaladas de forma global usamos npm. Esta es la
diferencia de npx, que nos permite ejecutar dependencias que están instaladas
de forma local para poder usarlas. */
