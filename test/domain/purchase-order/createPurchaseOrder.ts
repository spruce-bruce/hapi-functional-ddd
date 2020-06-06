import * as Lab from '@hapi/lab';
import { expect } from '@hapi/code';
import { v4 } from 'uuid';
import { times } from 'ramda';

import createPurchaseOrder from '../../../src/domain/purchase-order/createPurchaseOrder';
import createPOProduct from '../../../src/domain/purchase-order/createPOProduct';

const lab = Lab.script();
const { describe, it } = lab;

export { lab };

describe('Unit:', () => {
  describe('createPurchaseOrder', () => {

    it('can be created without arguments', () => {
      const purchaseOrder = createPurchaseOrder();
      expect(purchaseOrder.id).to.be.a.string();
      expect(purchaseOrder.PONumber).to.be.a.string();
    });

    it('can be created with id arguments', () => {
      const props = {
        id: v4(),
        PONumber: v4(),
      };

      const purchaseOrder = createPurchaseOrder(props);
      expect(purchaseOrder.id).to.equal(props.id);
      expect(purchaseOrder.PONumber).to.equal(props.PONumber);
    });

    it('can be created with products', () => {
      const props = { products: times(() => createPOProduct(), 5) };
      const purchaseOrder = createPurchaseOrder(props);
      purchaseOrder.products.forEach(
        (purchaseOrderProduct, i) => expect(purchaseOrderProduct.name).to.equal(props.products[i].name)
      );
    });

  });
});

