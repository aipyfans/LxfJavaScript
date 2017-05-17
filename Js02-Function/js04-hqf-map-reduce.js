/**
 * Created by william on 17-2-5.
 * map/reduce
 * http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001435119854495d29b9b3d7028477a96ed74db95032675000
 */

// map

function pow(x) {
    return x*x;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArr = arr.map(pow);
let newArrStr = arr.map(String);

console.log(" 映射成新的数组 ");
console.log(newArr);
console.log(" 转换成字符串数组");
console.log(newArrStr);


// reduce

let all = arr.reduce(function (x, y) {
    return x+y;
});

let allSort = arr.reduce(function (x, y) {
    return x*10 + y;
});

console.log(" 求和 = " + all);
console.log(" 求顺序和 = " + allSort);