import { v4 } from 'uuid';

type PurchaseOrder = {
  id: ReturnType<typeof v4>,
  PONumber?: ReturnType<typeof v4>,
}
export type { PurchaseOrder };

const createPurchaseOrder = ({
  id = v4(),
  PONumber = v4()
}) : PurchaseOrder => ({
  id,
  PONumber,
});

export default createPurchaseOrder;
