/**
 * Created by william on 17-2-5.
 * 插入DOM
 *
 * http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014359940861047248456754f44e55919fe9370c723ae6000
 */



// sort list:
var jds = document.getElementById("test-list").children;

var jda = [];
for (let i = 0; i < jds.length; i++){
    jda.push(jds[i]);
}

jda.sort(function (a, b) {
    return (a.innerHTML >= b.innerHTML) ? 1 : -1;
});

var ol = document.getElementById('test-list');

for (let i = 0; i < jda.length; i++)ol.appendChild(jda[i]);