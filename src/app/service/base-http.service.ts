import axios from "axios";
import { Category } from "../models/category.model";
import { Product } from "../models/product.model";

/* En una clase también podemos enviar el tipo de forma
dinámica */
export class BaseHttpService<TypeClass> {
  /* private data: TypeClass[] = []; */
  constructor(
    private url: string
  ) {}

  async getAll(): Promise<TypeClass[]> {
    const { data } = await axios.get<TypeClass[]>(this.url);
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

  const url2 = 'https://api.escuelajs.co/api/v1/categories';
  /* El poder de los genéricos es que podemos construir de forma genérica porque
  dinámicamente estamos asignando el tipo, así BaseHttpService puede servirnos
  para traer producto, categorias o cualquier cosa porque es dinámico gracias
  al genérico. No tuvimos que crear un servicio diferente para Product y otro para
  Category: */
  const categoryService = new BaseHttpService<Category>(url2);
  const rtaCategory = await categoryService.getAll(); // <=  BaseHttpService<Category>.getAll(): Promise<Category[]>
  console.log(rtaCategory);
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
