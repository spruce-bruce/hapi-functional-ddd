export interface Product {
  id: string,
  name: string,
  toString: () => string
}

//TODO: learn about partials
//use type to define type
const createProduct = ({ id, name,} : { id: string, name: string}) : Product => ({
  id,
  name,

  toString: () => JSON.stringify({ id, name })
});

module.exports = createProduct;
