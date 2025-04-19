/*
  Getters
  Son una forma controlada de acceder a las propiedades privadas de la clase
  y protegerlas.
*/

export class MyDate {
  constructor(
    public year: number = 1993,
    public month: number = 7,
    private _day: number = 9,
  ) {}

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }

    return `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount
    }
    if (type === 'months') {
      this.month += amount
    }
    if (type === 'years') {
      this.year += amount
    }
  }

  /* Debemos usar la palabra reservada get seguida del nombre de la
  propiedad que queremos obtener, pero como tenemos la propiedad day
  y el getter day con el mismo nombre tendrémos este error:
  Duplicate identifier 'day'. Una de la formas en que podemos solucionar
  esto es que a las propiedades privadas que tengan getters y setters le agreguemos
  un underscore (_) en el nombre, por ejemplo, _day */
  get day() {
    return this._day;
  }

  /* No necesariamente debemos usar getters solo para propiedades privadas,
  isLeapYear no existe dentro de las propiedades de la clase, pero
  podemos usar un getter si así lo queremos: */
  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  /* Cualquier getter que definamos, sea para una propiedad privada o para extender
  una propriedad más como un método (como en el caso de isLeapYear), debe retornar algo */
  /* get myReturn() {
    Si no retornamos nada tendrémos este error: A 'get' accessor must return a value.
  } */
}

const myDate = new MyDate(2025, 3, 9);
console.log(myDate.printFormat());

/* El getter va a ser accedido desde afuera de la clase como si
fuera una propiedad, pero es una función: */
console.log(myDate.day);
console.log('2025', myDate.isLeapYear);
/* Aunque el getter haga parecer que estamos accediendo a la propiedad por
la sintaxis que usamos myDate.day, no podemos hacer una asignación: */
/* myDate.day = 2323; <= Cannot assign to 'day' because it is a read-only property. */

const myDate2 = new MyDate(2000, 3, 9);
console.log('2000', myDate2.isLeapYear);
const myDate3 = new MyDate(2001, 3, 9);
console.log('2001', myDate3.isLeapYear);
const myDate4 = new MyDate(2004, 3, 9);
console.log('2004', myDate4.isLeapYear);

