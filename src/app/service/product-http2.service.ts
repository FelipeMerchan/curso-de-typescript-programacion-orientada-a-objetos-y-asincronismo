import { Product } from "../models/product.model";
import { BaseHttpService } from "./base-http.service";

/* Podemos usar a ProductHttpService que es una extensión de BaseHttpService
(extensión de sus métodos y propeidades) y agregarle más métodos y propiedades específicas
 */
export class ProductHttpService extends BaseHttpService<Product> {
  otroRequest() {
    this.url;
    /* Código específico de ProductHttpService */
  }
}
