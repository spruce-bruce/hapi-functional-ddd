import { v4 } from 'uuid';
import  { PurchaseOrderProduct } from './createPOProduct';

type PurchaseOrder = {
  id: ReturnType<typeof v4>,
  PONumber: ReturnType<typeof v4>,
  products: PurchaseOrderProduct[],
}
export type { PurchaseOrder };


const createPurchaseOrder = ({
  id = v4(),
  PONumber = v4(),
  products = [] as PurchaseOrderProduct[],
} = {}) : PurchaseOrder => ({
  id,
  PONumber,
  products,
});

export default createPurchaseOrder;
