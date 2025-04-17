export class MyDate {
  year: number = 0;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
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
}

const myDate = new MyDate(1995, 9, 29);
console.log(myDate.printFormat());
myDate.add(3, 'days');
console.log(myDate.printFormat());
myDate.add(1, 'months');
console.log(myDate.printFormat());
/* En las clases podemos acceder de forma directa a los
métodos (myDate.printFormat()) y a las propiedades (myDate.day): */
console.log(myDate.day);
console.log(myDate.year);
console.log(myDate.month);
