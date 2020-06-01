import Joi from '@hapi/joi';
import { Request } from 'hapi';
import { createPurchaseOrder, PurchaseOrder } from '../../../domain/purchase-order';
import liftP from '../../../utility/liftP';
import { composeP } from 'ramda';

module.exports = {
  method: 'put',
  path: '/purchase-orders',
  handler: async (request: Request) => composeP(
    liftP(createPurchaseOrder)
  )(request.payload as Omit<PurchaseOrder, 'toString'>),
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
