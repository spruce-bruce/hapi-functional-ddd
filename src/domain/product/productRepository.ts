import store from '../../infrastructure/store';

import { composeP } from 'ramda';
import persist from '../../infrastructure/persist';
import { Product } from './createProduct';
import liftP from '../../utility/liftP';

export const get = (productId: string) => {
  return store.find('products', productId);
};

const mapProductToDb = ({ toString, price, ...product } : Product) => ({
  ...product,
  amount: price.getAmount(),
  currency: price.getCurrency()
});
const persistProduct = persist('products');

export const add = async (product: Product) : Promise<Product> => {
  await composeP(
    persistProduct( savableProduct  => get(savableProduct.id).then((product: Product) => !!product) ),
    liftP(mapProductToDb)
  )(product);
  return product;
};
