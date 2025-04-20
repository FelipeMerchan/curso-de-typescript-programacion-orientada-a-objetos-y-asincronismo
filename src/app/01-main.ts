import axios from "axios";
import { Product } from "./models/product.model";

(async () => {
  async function getProducts(): Promise<Product[]> {
    const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
    /* Si nos topamos con una librería que no nos permita tipar
    la respuesta de la petición podríamos forzar el tipado:
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    const data = rta.data as Product[];
    */
    return data;
  }

  const products = await getProducts();
  console.log(products.map((product) => `${product.id} - ${product.title}`));
})();
