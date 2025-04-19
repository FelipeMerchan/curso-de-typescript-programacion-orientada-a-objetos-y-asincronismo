/*
  Herencia
  Abstrae comportamientos.
  Con la herencia podemos reutilizar código de la clase (en este caso Animal)
  como el método move o greeting y especializarlos más como woof. Es decir,
  tenemos los métodos de la clase base más los métodos especializados de las clases
  particulares que extienden de la clase base.
*/

export class Animal {
  constructor(public name: string) {}

  move() {
    console.log('Moving');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(public owner: string, name: string) {
    /* Aquí estamos extendiendo propiedades. Debemos
    mandarle el parámetro del constructor de la clase que estamos
    heredando, en este caso la clase Animal en su constructor espera un
    name, por lo cual debemos enviar incovando suoer (super hace referencia a la clase
    padre de la cual estamos heredando). La razón detrás de esto de invocar
    el super es que si escribimos un constructor en Dog estamos
    sobreescribiendo el constructor de Animal, pero Animal requiere construirse
    con la propiedad name, es decir, necesita invocar su constructor */
    super(name);
    /* Sin embargo, no podemos asignar y definir name en los parámetros del constructor
    de Dog de la forma abreviada de TypeScript, es decir, definiendo public name: string
    porque estaríamos asignando un name en la clase Dog y otro name en la clase Animal cuando usamos
    el super(name), por ello en los parámetros de name no debemos definir el tipo de acceso de name
    así no se crea una propiedad name interna en Dog y solo se crea la propiedad name en Animal */
  }

  /* Aquí estamos extendiendo métodos, es decir le agregamos
  a lo que es el comportamiento de un animal (move, greeting) nuevos
  métodos (woff). */
  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('woof!')
    }
  }
}

const fifi = new Animal('Fifi');
fifi.move();
console.log(fifi.greeting());
const cheis = new Dog('Felipe', 'Cheis');
cheis.move();
console.log(cheis.greeting());
cheis.woof(3);
console.log(cheis.owner, cheis);
