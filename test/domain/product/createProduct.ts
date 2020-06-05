import * as Lab from '@hapi/lab';
import { expect } from '@hapi/code';

import createProduct from '../../../src/domain/product/createProduct';

const lab = Lab.script();
const { describe, it } = lab;

export { lab };

describe('Unit:', () => {
  describe('createProduct', () => {

    it('can be created without arguments', () => {
      const product = createProduct();
      expect(product.id).to.be.a.string();
    });

  });
});
