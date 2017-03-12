---
title: 【javascript】用javascript实现动画效果
---
学习时间：2016.3.8-2016.3.9

参考资料：javascript DOM编程艺术



目标：学习动画基础知识，用动画丰富网页的浏览效果。

动画：动画就是让元素的位置随着时间而不断地发生变化。

#### 1.位置

对动画实现效果的初末位置进行设置。

#### 2.时间

1.使用setTimeout(“函数名”,时间) 这里的时间以毫秒为单位。

2.如果想取消某个正在排队等待执行的函数，就必须事先把setTimeout函数的返回值赋值给一个变量。

3.用clearTimeout函数来取消等待执行队列里的某个函数，这个函数需要的参数是setTimeout函数的返回值。

4.要达到动态效果，需要变化量随着时间而递增。

5.获得元素的当前位置。

6.如果元素已经到达它的目的地，则退出这个函数。

7.如果元素尚未到达它的目的地，则把它向目的地移近一点。

8.经过一段时间间隔之后从第五步开始重复上述步骤。

9.在获取当前位置时，我们得到的是字符串而不是数字，为了得到数字，使用parseInt(“string”)来得到字符串中的数字。

10.对函数进行抽象。把已有的具体量作为通用参数。 

#### 3.实用的动画

1.除非浏览器允许用户冻结移动着的内容，否则就应该避免让内容在页面中移动。

2.目的：创建一个链接列表，当鼠标停留在任意链接时，图片自动移动。

3.方法：把全部图片放在一张图片上，利用css溢出就隐藏功能，即只能展现小窗口的内容，通过JavaScript来对图片进行移动，使在小窗口出现的内容与停留链接对应。

4.onmouseover 属性在鼠标指针移动到元素上时触发moveElement函数。

```javascript
function prepareSlideshow(){
	if (!document.getElementsByTagName) {return false;}
	if (!document.getElementById) {return false;}
	if (!document.getElementById("preview")) {return false;}
	if (!document.getElementById("linklist")) {return false;}
	var preview = document.getElementById("preview");
	preview.style.position = "absolute";
	preview.style.left = "0px";
	preview.style.top = "0px";
	var list = document.getElementById("linklist");
	var links = list.getElementsByTagName('a');
	links[0].onmouseover = function(){
		moveElement("preview",-100,0,10);
	}
	links[1].onmouseover = function(){
		moveElement("preview",-200,0,10);
	}
	links[2].onmouseover = function(){
		moveElement("preview",-300,0,10);
	}
}
addLoadEvent(prepareSlideshow);
```

5.这样基本实现了切换效果，但存在一个问题是如果当鼠标在不同链接中来回移动，动画效果会变得非常混乱。对moveElement函数进行改进。

6.问题：在抽象过程中，一个全局变量存在一个隐患，不管上次调用是否已经把图片移到最终位置，moveElement函数都会被再次调用并试图把这个图片移动到另一个地方去。于是就显示出类似于“拔河”的动画效果。

7.把moveElement函数中的全局变量movemt设置为elem变量的属性，达到只与某个特定元素有关的变量是存在的。

8.利用JavaScript为元素创建属性，element.property = value;然后使用clearTimeout函数。

9.问题：每次图片移动都是以1px为单位的，这样显得不够平滑以及过于缓慢。

10.目的：如果元素与目的地较远，就让它每次前进一大步，如果与目的地较近，就让它每次前进一小步。

11.算出当前位置和目的地的差距，这个结果除以10将是它每次前进的距离。

12.这样做会在结果小于1px的时候出现问题，我们没办法将元素前进小于1px的距离，并且这样更加缓慢。使用Math对象的ceil方法进行解决。

13.Math.ceil(number).这个方法将把浮点数number向大于方向舍入为与之最为接近的整数。

14.延伸一个，floor则是将number向小于方向舍入为与之最为接近的整数。round属性将把number舍入为与之最近的整数。

15.安全性检查，在函数最开头默认了elem元素已有left样式属性和top样式属性。但实际情况中可能没有。

```javascript
  if (!elem.style.left) {
  	elem.style.left = "0px";
  }
  if (!elem.style.top) {
  	elem.style.top = "0xp";
  }
```

16.问题：html文档中的div和div里面的img标签是为了这个动画效果而存在的，如果没有JavaScript，那么html文文档中的这个div和里面的img就是多余的了。

17.方法：使用JavaScript来创建div和里面的img，并且注意css对它们的设置。