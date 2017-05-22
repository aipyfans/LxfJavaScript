/**
 * Created by william on 17-2-5.
 * generator
 *  http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/00143450083887673122b45a4414333ac366c3c935125e7000
 */

function fib1(max) {
    var
        t,
        a = 0,
        b = 1,
        arr = [0, 1];
    while (arr.length < max) {
        t = a + b;
        a = b;
        b = t;
        arr.push(t);
    }
    return arr;
}

console.log(fib1(5));
console.log(fib1(10));

console.log("---------------------------------------------------------------------------------------");

function* fib2(max) {
    var
        t,
        a = 0,
        b = 1,
        n = 1;
    while (n < max) {
        yield a;
        t = a + b;
        a = b;
        b = t;
        n ++;
    }
    return a;
}

var f = fib2(5);
console.log(f.next()); // {value: 0, done: false}
console.log(f.next()); // {value: 1, done: false}
console.log(f.next()); // {value: 1, done: false}
console.log(f.next()); // {value: 2, done: false}
console.log(f.next()); // {value: 3, done: true}

console.log("---------------------------------------------------------------------------------------");


