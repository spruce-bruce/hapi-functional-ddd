const { Container } = require('js-data');
const { SqlAdapter } = require('js-data-sql');

const store = new Container();
const sqlAdapter = new SqlAdapter({
  knexOpts: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'root',
      database: 'database',
      port: '5432'
    }
  }
});

store.registerAdapter('sql', sqlAdapter, { 'default': true });
store.defineMapper('products', { recordClass: false });

module.exports = store;
