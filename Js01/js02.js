/**
 * Created by william on 17-2-5.
 * 数据类型和变量
 */

// 第一种是==比较，它会自动转换数据类型再比较，很多时候，会得到非常诡异的结果；

// 第二种是===比较，它不会自动转换数据类型，如果数据类型不一致，返回false，如果一致，再比较。

// 由于JavaScript这个设计缺陷，不要使用==比较，始终坚持使用===比较。

'use strict';
// 如果浏览器支持strict模式，
// 下面的代码将报ReferenceError错误:

// abc = 'Hello, world';
// alert(abc);
