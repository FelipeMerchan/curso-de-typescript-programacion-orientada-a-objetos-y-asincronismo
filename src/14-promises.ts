import axios from "axios";

(async () => {
  function delay(time: number) {
    /* A Promise podemos definir qué tipo de dato va a retornar
    usando los genéricos: */
    const promise = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });

    return promise;
  }

  function getProducts() {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');

    return promise;
  }

  /* Las funciones definidas con async van a retornar una promesa */
  async function getProductsAsync() {
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products');

    return rta.data;
  }

  console.log('---'.repeat(10))
  const rta = await delay(3000);
  console.log({ rta });
  console.log('---'.repeat(10))

  const products = await getProducts();
  console.log('products', products.data);
  const productsV2 = await getProductsAsync();
  console.log('productsV2', { productsV2 });
})();
