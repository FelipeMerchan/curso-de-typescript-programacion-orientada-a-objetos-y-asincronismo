/*
  Singleton: constructor privado
*/

export class MyService {
  static instance: MyService | null = null;

  /* Los constructores también tienen un acceso, es decir,
  podemos definir que sea privado o público. Al colocarlo de forma
  privada solo dentro de la clase puedo acceder a él: */
  private constructor(private name: string) {}

  /* Para Singleton es muy útil que el constructor sea privado porque
  permite que tengamos control sobre cuando crear una instancia de la clase
  y cuando no, como en el método create (que va a ser las veces del constructor) */
  static create(name: string) {
    /* Como instance es un estático, es decir, pertenece a
  la clase en lugar de a instancias individuales, debemos
  acceder a esta propiedad desde MyService en lugar de this: */
    if (MyService.instance === null) {
      console.log('Debería entrar una vez');
      /* Como estoy desde la misma clase podemos llamar
      al constructor que es privado para la clase: */
      MyService.instance = new MyService(name);
    }

    return MyService.instance;
  }

  getName() {
    return this.name;
  }
}

const myService1 = MyService.create('service 1');
console.log(myService1.getName());
const myService2 = MyService.create('service 2');
console.log(myService2.getName());
const myService3 = MyService.create('service 3');
console.log(myService3.getName());

console.log(myService1 === myService2); // <= true, solo se creó 1 instancia, por lo cual, myService1 y myService2 son exactamente lo mismo.
