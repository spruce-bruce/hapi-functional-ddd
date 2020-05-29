const Lab = require('@hapi/lab');
const { expect } = require('@hapi/code');
const { afterEach, before, beforeEach, describe, it } = exports.lab = Lab.script();
const { init, register } = require('../../../../lib/server');
const { v4 } = require('uuid');

describe('Routes', () => {
  describe('product-save', () => {
    let server;
    before(async () => {
      await register();
    });

    beforeEach(async () => {
      server = await init();
    });

    afterEach(async () => {
      await server.stop();
    });

    it('responds with 200', async () => {
      const res = await server.inject({
        method: 'put',
        url: '/products',
        payload: { id: v4(), name: 'A name' }
      });
      expect(res.statusCode).to.equal(200);
    });

    it('put is idempotent', async () => {
      const productResource = { id: v4(), name: 'A name' };
      const res1 = await server.inject({
        method: 'put',
        url: '/products',
        payload: productResource,
      });

      const res2 = await server.inject({
        method: 'put',
        url: '/products',
        payload: productResource,
      });

      expect(res1.statusCode).to.equal(res2.statusCode);
    });

    it('put responds with 400', async () => {
      const res = await server.inject({
        method: 'put',
        url: '/products',
        payload: { id: v4(), something: 'fake' }
      });
      expect(res.statusCode).to.equal(400);
    });
  });
});

