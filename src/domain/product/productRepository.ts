import store from '../../infrastructure/store';

import { composeP } from 'ramda';
import persist from '../../infrastructure/persist';
import { Product } from './createProduct';

export const get = (productId: string) => {
  return store.find('products', productId);
};

// Promise.resolve is a type lift and is a normal functional pattern
const mapProductToDb = ({ toString, ...product } : Product) => Promise.resolve(product);
const persistProduct = persist('products');

export const add = async (product: Product) : Promise<Product> => {
  await composeP(
    persistProduct( savableProduct  => get(savableProduct.id).then((product: Product) => !!product) ),
    mapProductToDb
  )(product);
  return product;
};
