/**
 * Created by william on 17-2-5.
 * Date
 */

var now = new Date();
console.log(now); // Wed Jun 24 2015 19:49:22 GMT+0800 (CST)
console.log(now.getFullYear()); // 2015, 年份
console.log(now.getMonth()); // 5, 月份，注意月份范围是0~11，5表示六月
console.log(now.getDate()); // 24, 表示24号
console.log(now.getDay()); // 3, 表示星期三
console.log(now.getHours()); // 19, 24小时制
console.log(now.getMinutes()); // 49, 分钟
console.log(now.getSeconds()); // 22, 秒
console.log(now.getMilliseconds()); // 875, 毫秒数
console.log(now.getTime()); // 1435146562875, 以number形式表示的时间戳

console.log("---------------------------------------------------------------------------------------");

// 创建一个指定日期和时间的Date对象，可以用

var d = new Date(2015, 5, 19, 20, 15, 30, 123);
console.log(d); // Fri Jun 19 2015 20:15:30 GMT+0800 (CST)

console.log("---------------------------------------------------------------------------------------");

// 第二种创建一个指定日期和时间的方法是解析一个符合ISO 8601格式的字符串

var d = Date.parse('2015-06-24T19:49:22.875+08:00');
console.log(d); // 1435146562875

// 但它返回的不是Date对象，而是一个时间戳。不过有时间戳就可以很容易地把它转换为一个Date：

var d = new Date(1435146562875);
console.log(d); // Wed   24 2015 19:49:22 GMT+0800 (CST)

console.log("-----------------------------------------时区----------------------------------------------");

// Date对象表示的时间总是按浏览器所在时区显示的，不过我们既可以显示本地时间，也可以显示调整后的UTC时间：

var d = new Date(1435146562875);
console.log(d.toLocaleString()); // '2015/6/24 下午7:49:22'，本地时间（北京时区+8:00），显示的字符串与操作系统设定的格式有关
console.log(d.toUTCString()); // 'Wed, 24 Jun 2015 11:49:22 GMT'，UTC时间，与本地时间相差8小时

console.log("---------------------------------------------------------------------------------------");

// 获取当前时间戳，可以用：

if (Date.now) {
    console.log(Date.now()); // 老版本IE没有now()方法
} else {
    console.log(new Date().getTime());
}

console.log("---------------------------------------------------------------------------------------");
