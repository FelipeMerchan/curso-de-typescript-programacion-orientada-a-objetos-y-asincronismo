/*
  Estáticos
  En TypeScript, los métodos y variables estáticos son aquellos que
  pertenecen a la clase en sí misma en lugar de a una instancia
  específica de la clase.

  Se utilizan para definir comportamientos que están relacionados con la clase
  en su conjunto, y no con instancias individuales.

  Un método estático es un método que se define con la palabra clave static.
  Es importante saber que Los métodos estáticos no tienen acceso a las propiedades
  de instancia (this), ya que están asociados a la clase en sí misma.

  Una variable estática, al igual que los métodos estáticos, pertenece a
  la clase en lugar de a instancias individuales. Las variables estáticas
  se pueden usar para almacenar valores que son comunes para todas las
  instancias de la clase.
*/

/* No estamos haciendo una instancia de la clase Math, pero podemos acceder
a métodos y propiedades de la clase: */
console.log('Math', Math.PI);
console.log('Math', Math.max(1,2,3,8,4,5,0));

class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => max >= item ? max : item, 0);
  }
}

/* const math = new MyMath();
math.PI; */
console.log('MyMath', MyMath.PI);
console.log('MyMath', MyMath.max(1,2,3,8,4,5,0));
const numbers = [1,2,3,8,4,5,0, 3000];
console.log('MyMath', MyMath.max(...numbers));
