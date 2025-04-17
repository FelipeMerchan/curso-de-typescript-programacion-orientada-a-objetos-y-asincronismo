/* TypeScript nos brinda accesos, el acceso por defecto es el público.
En el acceso público se permite desde afuera tener la posibilidad
de leer las propiedades y métodos: myDate.year. En TypeScript todos los
métodos y propiedades de una clase a los que no se les especifique el tipo
de acceso va a ser público.
*/

export class MyDate {
  /* existe una palabra clave public, pero es exactamente lo mismo a no usar
  o especificar el tipo de acceso dado a que por defecto TypeScript lo hace
  por nosotros. */
  public year: number = 0;
  public month: number;
  /* Si no queremos que una propiedad pública pueda ser modifcada
  podemos usar readonly, esto nos dará este error si intentamos
  modificar a day: Cannot assign to 'day' because it is a read-only property.
  Al usar readonly no podremos modificar la propiedad tanto internamente
  en la clase (this.day += amount) como por fuera de la clase (myDate.day = 12).
  */
  public readonly day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  public printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  public add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount
    }
    if (type === 'months') {
      this.month += amount
    }
    if (type === 'years') {
      this.year += amount
    }
  }
}

const myDate = new MyDate(1995, 9, 29);
console.log(myDate.day); // 29
/* Podemos reasignar las propiedades públicas y esto
puede ser algo peligroso: */
myDate.day = 12;
console.log(myDate.day); // 12
