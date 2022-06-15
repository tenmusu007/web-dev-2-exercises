/**
 * 
 * EXERCISE 1
 * 
 * @param {*} promise 
 * @param {*} transformer 
 * @returns {Promise}
 */
function mapPromise(promise, transformer) {
  return new Promise((resolve, reject) => {
    /* IMPLEMENT ME!! */
    promise
      .then((data)=>{
        resolve(transformer(data))
      })
      .catch((error)=>{
        reject(error)
      })
    })
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise) {
  // console.log(numberPromise)
  return numberPromise
  .then((data)=>{
    // console.log(typeof(data));
    if(isNaN(data)){
      // console.log(data)
      throw `Cannot convert '${data}' to a number!`
    }else{
      return data*data
    }
  })
}

/**
 * EXERCISE 3
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise) {
  return squarePromise(promise)
    .catch((data)=>{
      if(!isNaN(data) < 0){
        // console.log(data)
        return data
        // reject(data)
        // throw new Error();
        // reject(data)
      }else{
        // console.log("hi")
        return 0
      }
    });
}

/**
 * EXERCISE 4
 * 
 * @param {Promise} promise 
 * @returns {Promise}
 */
function switcheroo(promise) {
  return promise.then(
    ((data)=>{
      throw data
    }),
    (error)=>{
      return error
    })
}


/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};