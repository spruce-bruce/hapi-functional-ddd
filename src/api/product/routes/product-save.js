const Joi = require('@hapi/joi');
const { createProduct, persistProduct } = require('../../../domain/product');
const liftP = require('../../../utility/liftP');
const { composeP } = require('ramda');

const mapProductToResource = product => ({ product });

module.exports = {
  method: 'put',
  path: '/products',
  handler: async (request) => composeP(
    liftP(mapProductToResource),
    persistProduct,
    liftP(createProduct)
  )(request.payload),
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
