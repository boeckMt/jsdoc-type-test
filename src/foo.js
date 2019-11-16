/**
 * @typedef {Object} Foo
 * @property {string} name
 */

/** @type {Foo} */
const foo = {
   name: 'foofoo'
}


/**
 * 
 * @param {number} a 
 * @param {number} [b]
 * @returns {number}
 */
export function plus(a, b) {
   if(!b){
      b = 10;
   }
   return a + b;
}