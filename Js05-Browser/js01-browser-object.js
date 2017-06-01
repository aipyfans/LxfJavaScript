/**
 * Created by william on 17-2-5.
 * 浏览器对象
 *
 * http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001434499832124d97d77b00706461f9daf1a390b75ade1000
 */

'use strict';

// window

// window对象不但充当全局作用域，而且表示浏览器窗口。
// window对象有innerWidth和innerHeight属性，可以获取浏览器窗口的内部宽度和高度。
// 内部宽高是指除去菜单栏、工具栏、边框等占位元素后，用于显示网页的净宽高。
// 还有一个outerWidth和outerHeight属性，可以获取浏览器窗口的整个宽高。

// 可以调整浏览器窗口大小试试:
alert('window inner size: ' + window.innerWidth + ' x ' + window.innerHeight);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// navigator

// navigator对象表示浏览器的信息，最常用的属性包括：

// navigator.appName：浏览器名称；
// navigator.appVersion：浏览器版本；
// navigator.language：浏览器设置的语言；
// navigator.platform：操作系统类型；
// navigator.userAgent：浏览器设定的User-Agent字符串。

// 请注意，navigator的信息可以很容易地被用户修改，所以JavaScript读取的值不一定是正确的。

alert('appName = ' + navigator.appName + '\n' +
    'appVersion = ' + navigator.appVersion + '\n' +
    'language = ' + navigator.language + '\n' +
    'platform = ' + navigator.platform + '\n' +
    'userAgent = ' + navigator.userAgent);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// screen

// screen对象表示屏幕的信息，常用的属性有：

// screen.width：屏幕宽度，以像素为单位；
// screen.height：屏幕高度，以像素为单位；
// screen.colorDepth：返回颜色位数，如8、16、24。
alert('Screen size = ' + screen.width + ' x ' + screen.height);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// location

// location对象表示当前页面的URL信息。例如，一个完整的URL：

// http://www.example.com:8080/path/index.html?a=1&b=2#TOP
//     可以用location.href获取。要获得URL各个部分的值，可以这么写：

location.protocol; // 'http'
location.host; // 'www.example.com'
location.port; // '8080'
location.pathname; // '/path/index.html'
location.search; // '?a=1&b=2'
location.hash; // 'TOP'

// 要加载一个新页面，可以调用location.assign()。如果要重新加载当前页面，调用location.reload()方法非常方便。

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// document

// document对象表示当前页面。由于HTML在浏览器中以DOM形式表示为树形结构，document对象就是整个DOM树的根节点。
// document的title属性是从HTML文档中的<title>xxx</title>读取的，但是可以动态改变：
document.title = '努力学习JavaScript!';

// 要查找DOM树的某个节点，需要从document对象开始查找。最常用的查找是根据ID和Tag Name。
// 用document对象提供的getElementById()和getElementsByTagName()可以按ID获得一个DOM节点和按Tag名称获得一组DOM节点：

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//
history

// history对象保存了浏览器的历史记录，JavaScript可以调用history对象的back()或forward ()，相当于用户点击了浏览器的“后退”或“前进”按钮。
// 这个对象属于历史遗留对象，对于现代Web页面来说，由于大量使用AJAX和页面交互，简单粗暴地调用history.back()可能会让用户感到非常愤怒。
// 新手开始设计Web页面时喜欢在登录页登录成功时调用history.back()，试图回到登录前的页面。这是一种错误的方法。
// 任何情况，你都不应该使用history这个对象了

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
