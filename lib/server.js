const Hapi = require('@hapi/hapi');

const registerPlugins = async server => {
  await server.register(require('../src/api/product'));
  await server.register(require('../src/api/purchase-order').default);
  return server;
};


const createServer = () => {
  return Hapi.server({
    port: 3000,
    host: 'localhost'
  });
}

exports.createServer = createServer;
exports.register = async (server) => {
  await registerPlugins(server);
}

exports.init = async (server) => {
  await server.initialize();
  return server;
};

exports.start = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });

  await registerPlugins(server);
  await server.register(require('@hapi/inert'));
  await server.register(require('@hapi/vision'));
  await server.register({ plugin: require('hapi-swagger'), options: { info: {  title: 'Loose Coupling POC', version: require('../package').version  } }})
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
  return server;
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});
