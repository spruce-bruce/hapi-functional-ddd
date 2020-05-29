import { captureRejectionSymbol } from "events";

const store = require('./store');

interface PromisePredicate<T=any> {
  (arg:T): Promise<boolean>;
}

interface SavableObject {
  id?: number | string,
}

const persist = (mapperName: string) => (shouldUpdatePredicate : PromisePredicate<SavableObject>) => (savableObject : SavableObject) => shouldUpdatePredicate(savableObject)
  .then(shouldUpdate => shouldUpdate
    ? store.update(mapperName, savableObject.id, savableObject)
    : store.create(mapperName, savableObject)
  );

export default persist;
