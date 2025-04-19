/*
  Setters
  Son una forma de modificar propiedades en una clase y las reglas
  que debería cumplir.
*/

export class MyDate {
  constructor(
    public year: number = 1993,
    private _month: number = 7, // <= no puede llamarse igual que un setter o getter, por eso usamos el underscore en el nombre
    private _day: number = 9,
  ) {}

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
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
      this._month += amount
    }
    if (type === 'years') {
      this.year += amount
    }
  }

  get day() {
    return this._day;
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  get month() {
    return this._month;
  }

  /* Debemos usar la palabra reservada set. Al igual que con los setters
  no podemos usar el mismo nombre de la propiedad en el getter (set month())
  porque tendríamos el mismo error: Duplicate identifier 'month'.
  Además, siempre deben recibir 1 parámetro:
   */
  set month(newValue: number) {
    /* Podemos agregar reglas para esa modificación, la importancia y
    utilidad de los setters está en proteger la modificación y solo permitirla
    si se cumplen nuestras reglas: */
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue;
    } else {
      throw new Error('month out of range');
    }

    /* En un setter no podemos retornar valores, los setters por definición son
    métodos que son void:
    return 0; <= no está permitido en un setter.
    */
  }
}

/* Recomendación, si los setters o getters no tiene lógica y simplemente retornan o setean
el valor directamente es mejor dejar esas propiedades como publicas así
se pueden modificar o leer sin restricciones:
  get month() {
    return this._month;
  }
  set month(newValue: number) {
    this._month = newValue;
  }
  Lo anterior se vuelve simplemente boilerplate debido a que podemos lograr
  lo mismo con un acceso public.
*/

const myDate = new MyDate(2025, 3, 9);
console.log(myDate.printFormat());
/* Tanto los setters y getters nos van a permitir interactuar como si
fueran una propiedad mas de la clase: */
myDate.month = 4;
console.log('Run', myDate.month);
myDate.month = 78;
console.log('Esto no debe aparecer', myDate.month);
