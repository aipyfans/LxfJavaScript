/**
 * Created by william on 17-06-01.
 * 删除DOM
 *
 * http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001435997163473d309006809fa43abbba322be3eb090a8000
 */

// 拿到待删除节点:
var self = document.getElementById('to-be-removed');

// 拿到父节点:
var parent = self.parentElement;

// 删除:
var removed = parent.removeChild(self);

removed === self; // true


