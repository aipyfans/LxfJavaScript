/**
 * Created by william on 17-2-5.
 * 操作DOM
 *
 * http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001434499851683f7f8d6b7717343248a75d5e7f930def4000
 */

// 返回ID为'test'的节点：
// var test = document.getElementById('test');

// 先定位ID为'test-table'的节点，再返回其内部所有tr节点：
// var trs = document.getElementById('test-table').getElementsByTagName('tr');

// 先定位ID为'test-div'的节点，再返回其内部所有class包含red的节点：
// var reds = document.getElementById('test-div').getElementsByClassName('red');

// 获取节点test下的所有直属子节点:
// var cs = test.children;

// 获取节点test下第一个、最后一个子节点：
// var first = test.firstElementChild;
// var last = test.lastElementChild;

//----------------------------------------------------------------------------------------------

// 通过querySelector获取ID为q1的节点：
// var q1 = document.querySelector('#q1');

// 通过querySelectorAll获取q1节点内的符合条件的所有节点：
// var ps = q1.querySelectorAll('div.highlighted > p');

//----------------------------------------------------------------------------------------------

'use strict';
/*
// 选择<p>JavaScript</p>:
var js = document.getElementById("test-p");

// 选择<p>Python</p>,<p>Ruby</p>,<p>Swift</p>:
var arr = document.getElementsByClassName("c-green")[0].children;

// 选择<p>Haskell</p>:
var haskell = document.getElementsByClassName("c-green")[1].lastElementChild;
*/

// 选择<p>JavaScript</p>:
var js = document.querySelector('#test-p');

// 选择<p>Python</p>,<p>Ruby</p>,<p>Swift</p>:
var arr = document.querySelectorAll('div.c-red.c-green > p');

// 选择<p>Haskell</p>:
var haskell = document.getElementById('test-div').lastElementChild.lastElementChild;

// 测试:
if (!js || js.innerText !== 'JavaScript') {
    alert('选择JavaScript失败!');
} else if (!arr || arr.length !== 3 || !arr[0] || !arr[1] || !arr[2] || arr[0].innerText !== 'Python' || arr[1].innerText !== 'Ruby' || arr[2].innerText !== 'Swift') {
    alert('选择Python,Ruby,Swift失败!');
} else if (!haskell || haskell.innerText !== 'Haskell') {
    alert('选择Haskell失败!');
} else {
    alert('测试通过!');
}



