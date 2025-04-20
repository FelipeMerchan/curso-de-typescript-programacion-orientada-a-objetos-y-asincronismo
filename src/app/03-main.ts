import { ProductHttpService } from "./service/product-http.service";

(async () => {
  /*
  Podríamos crear un singleton para ProductHttpService en caso de que
  algún otro punto de la aplicación necesite hacer peticiones porque
  realmente no queremos crear muchas instancias sino crear un singleton y
  que se comparta esa instancia para toda la aplicación.
  */
  const productService = new ProductHttpService();

  try {
    console.log('---'.repeat(10));
    console.log('getAll');
    const products = await productService.getAll();
    console.log(products.length);
    console.log(products.map((item) => item.price));

    const productId = products[0].id;

    console.log('---'.repeat(10));
    console.log('update');
    await productService.update(productId, {
      price: 10000,
      title: 'Nuevo title',
      description: 'Nueva descripción',
    });

    console.log('---'.repeat(10));
    console.log('findOne');
    const product = await productService.findOne(productId);
    console.log(product);
  } catch (error) {
    console.error(error);
  }
})();
