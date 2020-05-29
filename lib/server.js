const Hapi = require('@hapi/hapi');

const server = Hapi.server({
  port: 3000,
  host: 'localhost'
});

const registerPlugins = async server => {
  await server.register(require('../src/api/product'));
  return server;
};

exports.register = async () => {
  await registerPlugins(server);
}

exports.init = async () => {
  await server.initialize();
  return server;
};

exports.start = async () => {
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
