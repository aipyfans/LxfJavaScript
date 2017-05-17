/**
 * Created by william on 17-2-5.
 * sort
 * http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014351226817991a9c08f1ec0a45c99b9209bcfc71b8f6000
 */

// 看上去正常的结果:
let arr1 = ['Google', 'Apple', 'Microsoft'].sort(); // ['Apple', 'Google', 'Microsoft'];
console.log(arr1);

// apple排在了最后:
let arr2 = ['Google', 'apple', 'Microsoft'].sort(); // ['Google', 'Microsoft", 'apple']
console.log(arr2);

// 无法理解的结果:
let arr3 = [10, 20, 1, 2].sort(); // [1, 10, 2, 20]
console.log(arr3);


var arr = [10, 20, 1, 2];
arr.sort(function (x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
}); // [1, 2, 10, 20]
console.log(arr);


var arr = ['Google', 'apple', 'Microsoft'];
arr.sort(function (s1, s2) {
    x1 = s1.toUpperCase();
    x2 = s2.toUpperCase();
    if (x1 < x2) {
        return -1;
    }
    if (x1 > x2) {
        return 1;
    }
    return 0;
}); // ['apple', 'Google', 'Microsoft']
console.log(arr);


// 最后友情提示，sort()方法会直接对Array进行修改，它返回的结果仍是当前Array
var a1 = ['B', 'A', 'C'];
var a2 = a1.sort();
a1; // ['A', 'B', 'C']
a2; // ['A', 'B', 'C']
console.log(a1 === a2); // true, a1和a2是同一对象