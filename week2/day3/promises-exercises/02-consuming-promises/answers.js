/**
 * 
 * EXERCISE 1
 * 
 * @param {Promise} promise
 * @param {thunk} action
 * 
 */
function waitForPromise(promise, action){
  /* IMPLEMENT ME */
  // setTimeout(() => {
  //   action() 
  // }, 1000);
  // return new Promise((resolve)=>{
  //   resolve(promise)
  // })
  promise.then(()=>{
      action()
  })
}
/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise} promise 
 * @param {consumer} consumer 
 * @param {handler} handler 
 */
function consumePromise(promise, consumer, handler){
  /* IMPLEMENT ME! */
  console.log(promise)
  // new Promise ((resolve, reject)=>{
  //     resolve(promise)
  //   }).then((promise)=>{
  //     consumer(promise)
  //   }).catch((promise)=>{
  //     handler(promise)
  //   })
  promise 
    .then((data)=>{
      consumer(data)
    }).catch((data)=>{
      handler(data)
    })
}

/**
 * @callback thunk
 * @returns {void}
 */
module.exports = {
  waitForPromise,
  consumePromise,
};