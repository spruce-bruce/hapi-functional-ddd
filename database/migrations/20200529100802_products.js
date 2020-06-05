
exports.up = knex => knex.schema.createTable('products', t => {
  t.uuid('id').primary();
  t.string('name');
  t.integer('amount');
  t.string('currency');
});

exports.down = knex => knex.schema.dropTable('products');
