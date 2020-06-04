import { Server } from "hapi";
import purchaseOrderSaveRoute from './routes/purchase-order-save';

const purchaseOrderPlugin = {
  name: 'purchase-order-plugin',
  version: '1.0.0',
  register: function (server: Server) {
    server.route(purchaseOrderSaveRoute);
  }
};

export default purchaseOrderPlugin;
