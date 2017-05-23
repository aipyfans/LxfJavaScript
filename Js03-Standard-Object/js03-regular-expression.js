/**
 * Created by william on 17-2-5.
 * RegExp【正则表达式】
 * http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001434499503920bb7b42ff6627420da2ceae4babf6c4f2000
 *
 *
 * 在正则表达式中，如果直接给出字符，就是精确匹配。
 * 要匹配变长的字符，在正则表达式中，用*表示任意个字符（包括0个），用+表示至少一个字符，用?表示0个或1个字符，用{n}表示n个字符，用{n,m}表示n-m个字符
 *
 * 用\d可以匹配一个数字
 * 用\w可以匹配一个字母或数字
 *
 * 要做更精确地匹配，可以用[]表示范围
 * A|B可以匹配A或B
 *
 * ^表示行的开头，^\d表示必须以数字开头。
 * $表示行的结束，\d$表示必须以数字结束。
 */


console.log("--------------------------------------------RegExp-------------------------------------------");

// 第一种方式是直接通过/正则表达式/写出来，第二种方式是通过new RegExp('正则表达式')创建一个RegExp对象

    var re1 = /ABC\-001/;
    var re2 = new RegExp('ABC\\-001');

    console.log(re1);
    console.log(re2);

console.log("------------------RegExp对象的test()方法用于测试给定的字符串是否符合条件-----------------");

    var re = /^\d{3}\-\d{3,8}$/;

    var r = re.test('010-12345'); // true
    console.log(r);

    var r = re.test('010-1234x'); // false
    console.log(r);

    var r = re.test('010 12345'); // false
    console.log(r);

console.log("-------------------------------------------切分字符串--------------------------------------------");

    var arrStrings = 'a b   c'.split(' ');
    console.log(arrStrings);

    var arrStrings = 'a b   c'.split(/\s+/);
    console.log(arrStrings);

    var arrStrings = 'a,b, c  d'.split(/[\s\,]+/); // ['a', 'b', 'c', 'd']
    console.log(arrStrings);

    var arrStrings = 'a,b;; c  d'.split(/[\s\,\;]+/); // ['a', 'b', 'c', 'd']
    console.log(arrStrings);

console.log("------------------------------------------分组---------------------------------------------");

// 除了简单地判断是否匹配之外，正则表达式还有提取子串的强大功能。用()表示的就是要提取的分组（Group）。
// exec()方法在匹配成功后，会返回一个Array，第一个元素是正则表达式匹配到的整个字符串，后面的字符串表示匹配成功的子串。
// exec()方法在匹配失败时返回null。

    var re = /^(\d{3})-(\d{3,8})$/;

    var result = re.exec('010-12345');
    console.log(result);

    var result = re.exec('010 12345');
    console.log(result);

    var re = /^(0[0-9]|1[0-9]|2[0-3]|[0-9])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])$/;
    var result = re.exec('19:05:30'); // ['19:05:30', '19', '05', '30']
    console.log(result);

console.log("-------------------------------------------贪婪匹配--------------------------------------------");

    var re = /^(\d+)(0*)$/;
    var result = re.exec('102300'); // ['102300', '102300', '']
    console.log(result);

    // 由于\d+采用贪婪匹配，直接把后面的0全部匹配了，结果0*只能匹配空字符串了。
    // 必须让\d+采用非贪婪匹配（也就是尽可能少匹配），才能把后面的0匹配出来，加个?就可以让\d+采用非贪婪匹配：

    var re = /^(\d+?)(0*)$/;
    var result = re.exec('102300'); // ['102300', '1023', '00']
    console.log(result);


console.log("---------------------------------------------------------------------------------------");

// JavaScript的正则表达式还有几个特殊的标志，最常用的是g，表示全局匹配：

var r1 = /test/g;
// 等价于:
var r2 = new RegExp('test', 'g');

// 全局匹配可以多次执行exec()方法来搜索一个匹配的字符串。当我们指定g标志后，每次运行exec()，正则表达式本身会更新lastIndex属性，表示上次匹配到的最后索引：

var s = 'JavaScript, VBScript, JScript and ECMAScript';
var re=/[a-zA-Z]+Script/g;

// 使用全局匹配:
var r = re.exec(s); // ['JavaScript']
console.log(r);
var r = re.lastIndex; // 10
console.log(r);

var r = re.exec(s); // ['VBScript']
console.log(r);
var r = re.lastIndex; // 20
console.log(r);

var r = re.exec(s); // ['JScript']
console.log(r);
var r = re.lastIndex; // 29
console.log(r);

var r = re.exec(s); // ['ECMAScript']
console.log(r);
var r = re.lastIndex; // 44
console.log(r);

var r = re.exec(s); // null，直到结束仍没有匹配到
console.log(r);

// 全局匹配类似搜索，因此不能使用/^...$/，那样只会最多匹配一次。
// 正则表达式还可以指定i标志，表示忽略大小写，m标志，表示执行多行匹配。