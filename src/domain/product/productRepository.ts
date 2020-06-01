const { composeP } = require('ramda');
const store = require('../../infrastructure/store');
import persist from '../../infrastructure/persist';
import { Product } from './createProduct';

exports.get = async (productId: string) => {
  return store.find('products', productId);
};

// Promise.resolve is a type lift and is a normal functional pattern
const mapProductToDb = ({ toString, ...product } : Product) => Promise.resolve(product);
const persistProduct = persist('products');

exports.add = async (product: Product) : Promise<Product> => {
  await composeP(
    persistProduct( savableProduct  => exports.get(savableProduct.id).then((product: Product) => !!product) ),
    mapProductToDb
  )(product);
  return product;
};