/**
 * Created by william on 17-06-01.
 * 错误处理
 *
 * http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001481157421687632cbe98b0094e96ba12c45c411f59ac000
 */


'use strict'

var r1, r2, s = null;

try {
    r1 = s.length; // 此处应产生错误
    r2 = 100; // 该语句不会执行
} catch (e) {
    console.log('出错了：' + e);
} finally {
    console.log('finally');
}
console.log('r1 = ' + r1); // r1应为undefined
console.log('r2 = ' + r2); // r2应为undefined

