import { UpdateProductDto } from "../dtos/product.dto";
import { Product } from "../models/product.model";
import { BaseHttpService } from "./base-http.service";
import { ProductHttpService } from "./product-http2.service";

export class ProductCRUDService {
  private url: string = 'https://api.escuelajs.co/api/v1/products';
  /* BaseHttpService tiene métodos genéricos para hacer peticiones */
  /* private http = new BaseHttpService<Product>(this.url); */
  private http = new ProductHttpService(this.url);

  async update(id: Product['id'], dto: UpdateProductDto) {
    /* Podemos agregar lógica de negocio gracias a que creamos esta clase
    ProductCRUDService, pero el request lo dejamos en nuestro http service,
    esa lógica que es compartida y se puede reusar en más lugares por ser genérica:*/
    this.http.otroRequest();
    return this.http.update(id, dto);
  }
}
