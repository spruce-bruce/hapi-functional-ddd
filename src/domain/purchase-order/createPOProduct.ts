import { v4 } from 'uuid';
import { Product } from '../product/createProduct';
import Dinero from 'dinero.js';

type PurchaseOrderProduct = Product & { quantity: number };
export type { PurchaseOrderProduct };

const createPurchaseOrderProdcut = ({
  id = v4(),
  name = '',
  price = { amount: 0, currency: 'USD'} as Dinero.Options,
  quantity = 0,
} = {}) : PurchaseOrderProduct => ({
  id,
  name,
  price: Dinero(price),
  quantity,
});

export default createPurchaseOrderProdcut;
