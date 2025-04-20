/*
  Acceso protegido - Heredando propiedades
  Ya hemos visto acerca de public y private, pero ahora con el concepto de herencia
  tenemos una nueva forma de acceso que es protected que es una forma de heredar propiedades
  y métodos.
*/

export abstract class Animal {
  constructor(protected name: string) {}

  move() {
    console.log('Moving');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }

  protected doSomething() {
    console.log('Do');
  }
}

export class Dog extends Animal {
  constructor(public owner: string, name: string) {
    /* Aquí con super estamos llamando al constructor de Animal,
    este constructor (super) solo lo podemos llamar desde el constructor
    del hijo, es decir no podemos llamar super(name) desde otro método del hijo: */
    super(name);
  }

  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('woof! ' + this.name);
    }
  }

  /* Si queremos agregar lógica a uno de los métodos que ya existen en la clase
  padre podemos crear un nuevo método con el mismo nombre en la clase hija
  y llamar el método de la clase padre: */
  move() {
    /* Code */
    console.log('Moving as a dog');
    super.move(); // <= llamamos el método move de la clase padre.
  }
}

const cheis = new Dog('Felipe', 'Cheis');
/* Es permitido modificar propiedades que se crean desde la clase padre,
es decir, podemos reasignar una propiedad de Animal (padre) en una instancia de
Dog (hijo):
cheis.name = '';
*/
/* Si quisieramos que name sea privado para que no podamos hacer lo anterior
tendríamos una limitación y es que name ya no podría ser accedida desde
la clase hija, es decir, no podemos usar this.name en ningún método de la clase
Dog (Property 'name' is private and only accessible within class 'Animal'.),
name estaría privada y solo sería accesible desde la clase padre Animal.
Para esto es que existe el nuevo tipo de acceso que es protected.
protected es básicamente un privado, pero que va a tener herencia. Es decir,
va a indicar que la propiedad solo se podrá utilizar de forma interna en las clases,
pero además se va a poder heredar así podrémos tener acceso a la propeidad name
dentro de la clase hija y a la vez la propiedad name no podrá ser leída ni
modificada externamente como en la línea 52.
cheis.name = ''; // <= Property 'name' is protected and only accessible within class 'Animal' and its subclasses

También podemos colocar métodos como protected. Por ejemplo,
el método move es publico en Animal, por lo cual, podemos llamar
a move desde la instancia de la clase hija como dog.move() o desde
dentro de la clase hija en alguno de sus métodos, si
usamos private en un método de Animal como greeting no podríamos
acceder desde la instancia de la clase hija dog.greeting() ni dentro
de la clase hija como:
export class Dog extends Animal {
  woof() {
    super.greeting(); <= no podemos acceder, no existe greeting aquí
  }
}

Por otro lado, con protected podemos tener acceso dentro de la clase hija:
export class Dog extends Animal {
  woof() {
    this.doSomething(); <= podemos acceder a doSomething desde la clase hija
  }
}

Pero no podemos acceder en las instancias de las clases hijas:
dog.doSomething() <= Property 'doSomething' is protected and only accessible within class 'Animal' and its subclasses.
*/
cheis.woof(1);
cheis.move();

