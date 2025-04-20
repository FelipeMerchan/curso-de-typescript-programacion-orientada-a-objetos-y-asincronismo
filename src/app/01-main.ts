import axios from "axios";
import { Product } from "./models/product.model";

(async () => {
  /* Podemos dejar que el tipo de retorno o firma del método sea inferido,
  es decir, no definir el valor de retorno Promise<Product[]>, no está mal
  dejar solo "async function getProducts() {}"" porque internamente este método
  ya está tipando el tipo de dato data y TypeScript ya podría inferir
  que si retorna data cuál debe ser el tipo que es Product[] */
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
