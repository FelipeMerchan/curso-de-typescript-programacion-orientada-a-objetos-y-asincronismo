import { Category } from "../models/category.model";
import { Product } from "../models/product.model";

export interface CreateProductDto extends Omit<Product, 'id' | 'category'>{
  categoryId: Category['id'];
}

/* Es la misma idea del Omit, solo que en lugar de omitir ciertos campos
vamos a escogerlos. Pick crea un nuevo tipo solo con los datos que
seleccionemos:
type example = {
    color: string;
    description: string;
}
*/
/* type example = Pick<Product, 'color' | 'description'>; */

/* Queremos la misma interfaz de product, pero que todos los campos
sean opcionales, así podemos enviar solo las propiedades que queramos
actualizar con el método updateProduct, es decir, es como si crearamos
una nueva interfaz con todos los campos de Product, pero opcionales:
{
  title?: string;
  image?: string;
  ...
}
  Esto nos permite evitar cambios a Product para volver campos opcionales
  o tener que duplicar toda la interfaz de Product solo por crear
  campos opcionales.

  Partial es una utility type que nos permite esto:

  export type UpdateProductDto = Partial<Product>;

  El resutlado de lo anterior es:
  type UpdateProductDto = {
    title?: string | undefined;
    image?: string | undefined;
    color?: string | undefined;
    price?: number | undefined;
    isNew?: boolean | undefined;
    tags?: string[] | undefined;
    description?: string | undefined;
    ... 5 more ...;
    updatedAt?: Date | undefined;
}
*/

/* Algunos campos sensibles como el id, createdAt, etc; que no deben ser
modificados por el cliente, no deben permitirse editar y TypeScript con su
análisis de código estático nos puede ayudar con esto para indicar
que no se permite que envien esos atributos, por esto en este caso
es mejor usar CreateProductDto en lugar de Product en el Partial dado a que CreateProductDto
está omitiendo el id, createdAt, etc: */
export interface UpdateProductDto extends Partial<CreateProductDto> {}

/* El contrario de Partial es Required, deja todos los campos
como requeridos. El resuldado es que tenemos una nueva interfaz o tipo
con todos los campos obligatorios:
type example2 = {
    title: string;
    image: string;
    color: string;
    price: number;
    isNew: boolean;
    tags: string[];
    description: string;
    stock: number;
    size: Sizes;
    category: Category;
    readonly id: string;
    readonly createdAt: Date;
    updatedAt: Date;
}

Partial deja todo como opcional y Required deja todo como obligatorio.
*/
/* type example2 = Required<Product>; */

/* export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags: ReadonlyArray<string>;
} */

/* Readonly toma todos las propiedades de una interfaz y les aplica un
readonly.
Por ejemplo:
type example3 = Readonly<Product>;
Tendrá el siguiente tipo:

type example3 = {
    readonly title: string;
    readonly image: string;
    readonly color: string;
    readonly price: number;
    readonly isNew: boolean;
    readonly tags: string[];
    readonly description: string;
    ... 5 more ...;
    readonly updatedAt: Date;
}
 */
