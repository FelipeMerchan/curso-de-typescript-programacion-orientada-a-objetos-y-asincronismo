/*
  Constructor
  Es el método principal de nuestras clases. Es el método por el cual construímos
  la instancia de la clase y además le enviamos los parámetros por defecto con los
  cuales queremos que se inicialice esa instancia.
*/

export class MyDate {
 /*
  El siguiente código TypeScript nos ayuda a resumirlo:
  year: number = 0;
  month: number;
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  } */
 /* Podemos borrar la definición de propiedades como la asignación,
  pero para continuar teniendo las propieades en la clase
  debemos definir el tipo de acceso de los parámetros en el constructor:
  constructor(
  public year: number,
  public month: number,
  private day: number // es obligatorio definir el tipo de acceso
  ) {}
  Es básicamente lo mismo que teníamos en la línea 11 hasta la 19. Si no
  definimos el tipo de acceso TypeScript no hará la definición de la propiedad
  ni la asignación, por lo cual, es obligatorio agregar el tipo de acceso a cada
  parámetro del constructor:
  */
 constructor(
  public year: number = 1993,
  public month: number = 7,
  private day: number = 9,
  ) {}

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

  getDay() {
    return this.day;
  }
}

const myDate = new MyDate();
console.log('Constructor vacío () => ', myDate.printFormat());

const myDate2 = new MyDate(2025);
console.log('(2025) => ', myDate2.printFormat());

const myDate3 = new MyDate(2025, 3);
console.log('(2025, 3) => ', myDate3.printFormat());

const myDate4 = new MyDate(2025, 3, 9);
console.log('(2025, 3, 9) => ', myDate4.printFormat());
