/**
 * Created by william on 17-2-5.
 * JSON
 * JSON定死了字符集必须是UTF-8，表示多语言就没有问题了
 * 为了统一解析，JSON的字符串规定必须用双引号""，Object的键也必须用双引号""。
 *
 *
 *
 *
 * http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001434499490767fe5a0e31e17e44b69dcd1196f7ec6fc6000
 */


console.log("----------------------------------------序列化[json object --> json string]");
console.log("----------------------------------------");

var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};


var objJson = JSON.stringify(xiaoming);
console.log(objJson);
console.log("----------------------------------------");


var objJson = JSON.stringify(xiaoming, null, '  ');
console.log(objJson);
console.log("----------------------------------------");


// 第二个参数用于控制如何筛选对象的键值，如果我们只想输出指定的属性，可以传入Array：
var objJson = JSON.stringify(xiaoming, ['name', 'skills'], '  ');
console.log(objJson);


// 还可以传入一个函数，这样对象的每个键值对都会被函数先处理：
function convert(key, value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return value;
}

var objJson = JSON.stringify(xiaoming, convert, '  ');
console.log(objJson);

console.log("----------------------------------------");

// 如果我们还想要精确控制如何序列化小明，可以给xiaoming定义一个toJSON()的方法，直接返回JSON应该序列化的数据：

var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
    toJSON: function () {
        return { // 只输出name和age，并且改变了key：
            'Name': this.name,
            'Age': this.age
        };
    }
};

var objJson = JSON.stringify(xiaoming); // '{"Name":"小明","Age":14}'
console.log(objJson);

console.log("----------------------------------------反序列化[json string --> json object]");

// 用JSON.parse()把它变成一个JavaScript对象

var jsonObj = JSON.parse('[1,2,3,true]'); // [1, 2, 3, true]
console.log(jsonObj);
var jsonObj = JSON.parse('{"name":"小明","age":14}'); // Object {name: '小明', age: 14}
console.log(jsonObj);
var jsonObj = JSON.parse('true'); // true
console.log(jsonObj);
var jsonObj = JSON.parse('123.45'); // 123.45
console.log(jsonObj);

console.log("----------------------------------------");

// JSON.parse()还可以接收一个函数，用来转换解析出的属性：

var jsonObj = JSON.parse('{"name":"小明","age":14}', function (key, value) {
    // 把number * 2:
    if (key === 'name') {
        return value + '同学';
    }
    return value;
}); // Object {name: '小明同学', age: 14}
console.log(jsonObj);
