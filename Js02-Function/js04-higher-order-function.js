/**
 * Created by william on 17-2-5.
 * 高阶函数
 * http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001434499355829ead974e550644e2ebd9fd8bb1b0dd721000
 */

function add(x,y,f) {
    return f(x) + f(y);
}

let result = add(-5,6,Math.abs);
console.log(result);

