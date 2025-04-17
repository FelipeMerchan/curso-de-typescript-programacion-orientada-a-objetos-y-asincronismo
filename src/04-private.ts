/*
  Acceso privado
  Nos sirve para proteger propiedades y métodos que queremos que no puedan
  ser accesibles de manera externa.
*/

export class MyDate {
  year: number = 0;
  month: number;
  /* Con private no permitiremos que la propiedad pueda ser leída ni
  modificada externamente: Property 'day' is private and only
  accessible within class 'MyDate'. Solo la clase internamente
  puede acceder al método o propiedad privada. */
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    const day = this.addPadding(this.day);
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
      this.day += amount
    }
    if (type === 'months') {
      this.month += amount
    }
    if (type === 'years') {
      this.year += amount
    }
  }

  /* Podemos dar acceso a propiedades privadas con un get.
  No estamos accediendo directamente, pero hay un método público que
  brinda el valor como retorno. */
  getDay() {
    return this.day;
  }
}

const myDate = new MyDate(1995, 9, 29);
console.log(myDate.printFormat());
/* Property 'addPadding' is private and only accessible within class 'MyDate'. */
myDate.addPadding(22);
