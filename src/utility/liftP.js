const liftP = (fn) => {
  return (...args) => {
    return Promise.all(args).then((x) => fn.apply(null, x));
  };
};
module.exports = liftP;