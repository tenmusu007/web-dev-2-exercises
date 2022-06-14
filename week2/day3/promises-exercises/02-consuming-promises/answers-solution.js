/**
 *
 * EXERCISE 1
 *
 * @param {Promise} promise
 * @param {thunk} action
 *
 */
function waitForPromise(promise, action) {
  /* IMPLEMENT ME */
  promise.then(() => {
    action();
    // setTimeout(() => );
  });
}
/**
 *
 * EXERCISE 2
 *
 * @param {Promise} promise
 * @param {consumer} consumer
 * @param {handler} handler
 */
function consumePromise(promise, consumer, handler) {
  /* IMPLEMENT ME! */
  promise
    .then((data) => {
      consumer(data);
    })
    .catch((error) => {
      handler(error);
    });
}

/**
 * @callback thunk
 * @returns {void}
 */
module.exports = {
  waitForPromise,
  consumePromise,
};
