/*
  Clases abstractas - restringir la creación de objetos base
  Es una forma de restringir la creación de objetos de las clases base/padre.
*/

/* Si queremos restringir que no se puedan crear instancias de la clase
padre usamos la palabra reservada abstract, con esto restringimos que no
se puedan crear instancias de Animal (clase padre), la única forma de crear instancias
es por medio de un comportamiento específico por ejemplo, Dog que extiende de Animal.

A veces las clases base desde donde todas extienden tienen métodos que son abstractos,
es decir, no tienen implementaciones específicas sino son algo abstracto. Aquí
podemos usar clases abstractas que, como su nombre lo indica, son algo abstracto,
no representan algo específico (están vacios sus métodos) como si lo hacen las clases hijas
como Dog que tienen su propia implementación
*/
import { Animal, Dog } from './09-protected';

const animal = new Animal('Mia'); // <= Cannot create an instance of an abstract class.
animal.greeting();

const cheis = new Dog('cheis', 'Felipe');
cheis.greeting();
cheis.woof(2);

