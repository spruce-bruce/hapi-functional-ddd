import { v4 } from "uuid/interfaces";

type PurchaseOrder = {
  id: v4,
  PONumber?: v4,
  toString: () => string
}
export type { PurchaseOrder };

const createPurchaseOrder = ({ id, PONumber} : Omit<PurchaseOrder, 'toString'>) : PurchaseOrder => ({
  id,
  PONumber,

  toString: () => JSON.stringify({ id, PONumber })
});

export default createPurchaseOrder;
