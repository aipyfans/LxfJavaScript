/**
 * Created by william on 17-2-5.
 * Class继承
 *
 * http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001458267339633fd3a83c597d04b5fb59f7d1f6792efb3000
 */

class Student {
    constructor(name) {
        this.name = name;
    }

    hello() {
        alert('Hello, ' + this.name + '!');
    }
}

console.log("--------------------------------------");

class PrimaryStudent extends Student {
    constructor(name, grade) {
        super(name); // 记得用super调用父类的构造方法!
        this.grade = grade;
    }

    myGrade() {
        alert('I am at grade ' + this.grade);
    }
}

console.log("--------------------------------------");



