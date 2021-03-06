import { v4 } from 'uuid';
import Dinero from 'dinero.js';

type Product = {
  id: ReturnType<typeof v4>,
  name: string,
  price: Dinero.Dinero,
}
export type { Product };

const createProduct = ({
  id = v4(),
  name = '',
  price = { amount: 0, currency: 'USD'} as Dinero.Options
} = {}) : Product => ({
  id,
  name,
  price: Dinero(price),
});

export default createProduct;
