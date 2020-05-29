
exports.up = knex => knex.schema.createTable('products', t => {
  t.uuid('id').primary();
  t.string('name');
});

exports.down = knex => knex.schema.dropTable('products');
