import Joi from '@hapi/joi';
import { Request } from 'hapi';

module.exports = {
  method: 'put',
  path: '/purchase-orders',
  handler: async (request: Request) => {
    return { message: 'true' }
  },
  options: {
    tags: ['api'],
    description: 'Save a complete or partial purchase order',
    validate: {
      payload: Joi.object({
        id: Joi.string().guid().required(),
        PONumber: Joi.string()
      }),
    }
  }
}
