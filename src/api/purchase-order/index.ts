import { Server } from "hapi";

const purchaseOrderPlugin = {
  name: 'purchase-order-plugin',
  version: '1.0.0',
  register: async function (server: Server) {
    server.route(require('./routes/purchase-order-save'));
  }
};

export default purchaseOrderPlugin;