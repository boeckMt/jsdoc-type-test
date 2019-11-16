// https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html#supported-jsdoc


import { Bar } from "./bar";
import { Foo, plus } from "./foo";

/**
 * @type {string | number}
 */
let message = 'hello world';
message = 1;

/**
 * @type { Foo }
 */
let myfoo = {
    name: 'sepp'
};

/**
 *  @type { Bar }
 */
let mybar = new Bar('sepp');
console.log(mybar.length);

/**
 * is this the same like above?
 *  @type { import("./bar").Bar }
 */
let mybar2 = new Bar('hansel');
console.log(mybar2.length);


let sum = plus(8);
console.log(sum)