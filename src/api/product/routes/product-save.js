const Joi = require('@hapi/joi');
const { createProduct, persistProduct } = require('../../../domain/product');
const { andThen, pipe } = require('ramda');

const mapProductToResource = product => ({ product });

module.exports = {
  method: 'put',
  path: '/products',
  handler: request => pipe(
    createProduct,
    persistProduct,
    andThen(mapProductToResource)
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
