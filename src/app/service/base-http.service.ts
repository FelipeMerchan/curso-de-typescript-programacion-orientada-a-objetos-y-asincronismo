import axios from "axios";
import { Category } from "../models/category.model";
import { Product } from "../models/product.model";
import { UpdateProductDto } from "../dtos/product.dto";

/* En una clase también podemos enviar el tipo de forma
dinámica */
export class BaseHttpService<TypeClass> {
  /* private data: TypeClass[] = []; */
  constructor(
    protected url: string
  ) {}

  async getAll(): Promise<TypeClass[]> {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }

  /* Podemos enviar genéricos a métodos de la clase, que sean diferentes al genérico
  que recibe la clase (TypeClass) solo debemos tener cuidado con no nombrar con el mismo
  nombre 2 genéricos diferentes (el genérico del método y el genérico de la clase)
  porque se pueden confundir, los genéricos tienen algo como un scope, es decir
  que el genérico ID existirá dentro del método update, pero en un scope superior está
  el genérico TypeClass, si nombramos con el mismo nombre ambos genéricos el que usará
  TypeScript para el método update será el que reciba update y no usará el que reciba la clase
  porque dentro del método prevalece el genérico del scope de update. */
  async update<ID, DTO>(id: ID, changes: DTO) {
    /* Podemos usar el genérico TypeClass de la clase dentro de un método: */
    /* const array: TypeClass[] = []; */
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
}

/* const service = new BaseHttpService<string>(); */
/* Como pasamos string en el genérico el método getAll toma este genérico
y lo asigna en los lugares en los que le especificamos que lo usara:
getAll(): TypeClass[] | Promise<TypeClass[]> {
  return [];
}
*/
/* service.getAll(); */ // <= el resultado es que getAll se tipó con el genérico que enviamos: BaseHttpService<string>.getAll(): string[] | Promise<string[]>

/* const service2 = new BaseHttpService<number>(); */
/* service2.getAll(); */ // <= el resultado es que getAll se tipó con el genérico que enviamos: BaseHttpService<number>.getAll(): number[] | Promise<number[]>

(async () => {
  const url1 = 'https://api.escuelajs.co/api/v1/products';
  const productService = new BaseHttpService<Product>(url1);
  const rta = await productService.getAll(); // <=  BaseHttpService<Product>.getAll(): Promise<Product[]>
  console.log(rta);
  productService.update<Product['id'], UpdateProductDto>(1, {
    title: 'Asa',
  });

  const url2 = 'https://api.escuelajs.co/api/v1/categories';
  /* El poder de los genéricos es que podemos construir de forma genérica porque
  dinámicamente estamos asignando el tipo, así BaseHttpService puede servirnos
  para traer producto, categorias o cualquier cosa porque es dinámico gracias
  al genérico. No tuvimos que crear un servicio diferente para Product y otro para
  Category: */
  const categoryService = new BaseHttpService<Category>(url2);
  const rtaCategory = await categoryService.getAll(); // <=  BaseHttpService<Category>.getAll(): Promise<Category[]>
  console.log(rtaCategory);
  /* categoryService.update<Category['id'], UpdateCategoryDto>(1, {
    title: 'Asa',
  }); */
})();
/*
export class BaseHttpService<TypeClass> {
  private data: TypeClass[] = [];
}
const service2 = new BaseHttpService<number>();
service2.data <= BaseHttpService<number>.data: number[]
*/

/*
Gran uso de los genéricos
Como vimos con categoryService y productService para no crear
una clase para cada servicio podemos construir una clase genérica en donde nosotros
estamos enviando el tipado que necesitamos.
*/
