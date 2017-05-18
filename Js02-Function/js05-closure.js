/**
 * Created by william on 17-2-5.
 * 闭包
 * http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/00143449934543461c9d5dfeeb848f5b72bd012e1113d15000
 */

//---------------------------------------------------------------------------------------

function lazy_sum(arr) {
    var sum = function () {
        return arr.reduce(function (x, y) {
            return x + y;
        });
    }
    return sum;
}

let f = lazy_sum([1, 2, 3, 4, 5]); // function sum()
var result = f();
console.log(result);

// 注意一点，当我们调用lazy_sum()时，每次调用都会返回一个新的函数，即使传入相同的参数
var f1 = lazy_sum([1, 2, 3, 4, 5]);
var f2 = lazy_sum([1, 2, 3, 4, 5]);
var result = (f1 === f2); // false
console.log(result);

console.log("---------------------------------------------------------------------------------------");


function count() {
    var arr = [];
    for (var i=1; i<=3; i++) {
        arr.push(function () {
            return i * i; // 返回函数不要引用任何循环变量，或者后续会发生变化的变量
        });
    }
    return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];

console.log(f1()); // 16
console.log(f2()); // 16
console.log(f3()); // 16

console.log("---------------------------------------------------------------------------------------");

// 如果一定要引用循环变量怎么办？方法是再创建一个函数，用该函数的参数绑定循环变量当前的值，无论该循环变量后续如何更改，已绑定到函数参数的值不变
function count2() {
    var arr = [];
    for (var i=1; i<=3; i++) {
        arr.push((function (n) {
            return function () {
                return n * n;
            }
        })/*创建一个匿名函数并立刻执行*/(i));
    }
    return arr;
}

var results = count2();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];

console.log(f1()); // 1
console.log(f2()); // 4
console.log(f3()); // 9

console.log("---------------------------------------------------------------------------------------");

function create_counter(initial) {
    var x = initial || 0;
    return {
        inc: function () {
            x += 1;
            return x;
        }
    }
}

var c1 = create_counter();
console.log(c1.inc()); // 1
console.log(c1.inc()); // 2
console.log(c1.inc()); // 3

var c2 = create_counter(10);
console.log(c2.inc()); // 11
console.log(c2.inc()); // 12
console.log(c2.inc()); // 13

console.log("---------------------------------------------------------------------------------------");

function make_pow(n) {
    return function (x) {
        return Math.pow(x, n);
    }
}

// 创建两个新函数:
var pow2 = make_pow(2);
var pow3 = make_pow(3);

console.log(pow2(5)); // 25
console.log(pow3(7)); // 343



