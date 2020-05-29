const Joi = require('@hapi/joi');
const { createProduct, persistProduct } = require('../../../domain/product');

module.exports = {
  method: 'put',
  path: '/products',
  handler: async (request) => {
    const product = createProduct(request.payload);
    await persistProduct(product);
    return { product };
  },
  options: {
    tags: ['api'],
    description: 'Save a complete or partial product',
    validate: {
      payload: Joi.object({
        id: Joi.string().guid().required(),
        name: Joi.string()
      }),
    }
  }
}
