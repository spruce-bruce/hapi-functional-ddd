import { v4 } from "uuid/interfaces";

type Product = {
  id: v4,
  name: string,
  toString: () => string
}
export type { Product };

//TODO: learn about partials
//use type to define type
const createProduct = ({ id, name,} : { id: v4, name: string}) : Product => ({
  id,
  name,

  toString: () => JSON.stringify({ id, name })
});

module.exports = createProduct;
