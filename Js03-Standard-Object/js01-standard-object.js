/**
 * Created by william on 17-2-5.
 * 标准对象
 */

console.log(typeof 123); // 'number'
console.log(typeof NaN); // 'number'
console.log(typeof 'str'); // 'string'
console.log(typeof true); // 'boolean'
console.log(typeof undefined); // 'undefined'
console.log(typeof Math.abs); // 'function'
console.log(typeof null); // 'object'
console.log(typeof []); // 'object'
console.log(typeof {}); // 'object'

console.log("----------------------------------------包装对象-----------------------------------------------");

// number、boolean和string都有包装对象。没错，在JavaScript中，字符串也区分string类型和它的包装类型。包装对象用new创建：

var n = new Number(123); // 123,生成了新的包装类型
var b = new Boolean(true); // true,生成了新的包装类型
var s = new String('str'); // 'str',生成了新的包装类型

console.log(n);
console.log(b);
console.log(s);

console.log("-------------------------------------------包装对象和原始值用===比较会返回false--------------------------------------------");

typeof new Number(123); // 'object'
var r = new Number(123) === 123; // false
console.log(r);

typeof new Boolean(true); // 'object'
var r = new Boolean(true) === true; // false
console.log(r);

typeof new String('str'); // 'object'
var r = new String('str') === 'str'; // false
console.log(r);

// 所以闲的蛋疼也不要使用包装对象！尤其是针对string类型！！！

console.log("---------------------------------------------------------------------------------------");

var n = Number('123'); // 123，相当于parseInt()或parseFloat()
console.log(typeof n); // 'number'

var b = Boolean('true'); // true
console.log(typeof b); // 'boolean'

var b2 = Boolean('false'); // true! 'false'字符串转换结果为true！因为它是非空字符串！
var b3 = Boolean(''); // false
console.log(b2);
console.log(b3);

var s = String(123.45); // '123.45'
console.log(s); // 'string'
console.log(typeof s); // 'string'

console.log("---------------------------------------------------------------------------------------");
