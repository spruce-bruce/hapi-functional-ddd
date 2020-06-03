import { v4 } from "uuid/interfaces";

const store = require('./store');

interface PromisePredicate<T=any> {
  (arg:T): Promise<boolean>;
}

interface SavableObject {
  id?: number | string | v4,
}

const persist = (mapperName: string) => (shouldUpdatePredicate : PromisePredicate<SavableObject>) => (savableObject : SavableObject) => shouldUpdatePredicate(savableObject)
  .then(shouldUpdate => shouldUpdate
    ? store.update(mapperName, savableObject.id, savableObject)
    : store.create(mapperName, savableObject)
  );

export default persist;
