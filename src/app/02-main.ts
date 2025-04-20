import { ProductMemoryService } from "./service/product-memory.service";

const productService = new ProductMemoryService();

productService.create({
  title: 'Product 1',
  price: 100,
  description: 'Bla bla',
  categoryId: 12,
  images: [],
});

const products = productService.getAll();
const productId = products[0].id;
productService.update(productId, {
  title: 'Cambiar nombre',
});

const rta = productService.findOne(productId);
console.log({ rta });
