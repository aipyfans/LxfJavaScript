/**
 * Created by william on 17-06-01.
 * underscore
 *
 * http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001450370530539bc6e0e3dc02c4d3bb79993a8cde056b5000
 */

'use strict';
import  usm from 'underscore-min';

var a1 = [1, 4, 9, 16];
console.log(a1);

var a2 = a1.map(Math.sqrt); // [1, 2, 3, 4]
console.log(a2);

var a3 = a2.filter((x) => { return x % 2 === 0; }); // [2, 4]
console.log(a3);

usm.map([1, 2, 3], (x) => x * x); // [1, 4, 9]
usm.map({ a: 1, b: 2, c: 3 }, (v, k) => k + '=' + v); // ['a=1', 'b=2', 'c=3']