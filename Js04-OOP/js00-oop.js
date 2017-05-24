/**
 * Created by william on 17-2-5.
 * 面向对象编程
 *
 * JavaScript不区分类和实例的概念，而是通过原型（prototype）来实现面向对象编程
 * JavaScript的原型链和Java的Class区别就在，它没有“Class”的概念，所有对象都是实例
 * 所谓继承关系不过是把一个对象的原型指向另一个对象而已
 * 在JavaScrip代码运行时期，你可以把一个实例的原型从A变成B，或者变成任何对象。
 *
 * http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001434499763408e24c210985d34edcabbca944b4239e20000
 */

console.log("--------------------------------------原型");

var Student = {
    name: 'Robot',
    height: 1.2,
    run: function () {
        console.log(this.name + ' is running...');
    }
};

var xiaoming = {
    name: '小明'
};

xiaoming.__proto__ = Student;
xiaoming.run();

console.log("--------------------------------------");

var Bird = {
    fly: function () {
        console.log(this.name + ' is flying...');
    }
};

xiaoming.__proto__ = Bird;
xiaoming.fly(); // 小明 is flying...


console.log("--------------------------------------");


// 请注意：在编写JavaScript代码时，不要直接用obj.__proto__去改变一个对象的原型，并且，低版本的IE也无法使用__proto__。
// Object.create()方法可以传入一个原型对象，并创建一个基于该原型的新对象，但是新对象什么属性都没有，因此，我们可以编写一个函数来创建实例

// 原型对象:
var Student = {
    name: 'Robot',
    height: 1.2,
    run: function () {
        console.log(this.name + ' is running...');
    }
};

// 创建实例函数
function createStudent(name) {
    // 基于Student原型创建一个新对象:
    var s = Object.create(Student);
    // 初始化新对象:
    s.name = name;
    return s;
}

// 根据原型创建新实例
var xiaoming = createStudent('小明');
xiaoming.run(); // 小明 is running...

// 测试新实例的原型是否一致
var result = xiaoming.__proto__ === Student; // true
console.log("原型是否一致 = " + result)

