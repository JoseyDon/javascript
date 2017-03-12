---
title: 【javascript】CSS-DOM
---
学习时间：2017.3.6-2017.3.8

参考资料：javascript DOM 编程艺术

#### 1.三位一体的页面

结构层：由HTML或XHTML等标记语言负责创建，利用标签对网页内容的语义含义做出描述。

表示层：由CSS负责完成，CSS描述页面内容如何呈现。

行为层：javascript DOM，负责内容应该如何响应事件。

表示层和行为层总是存在的，因为存在默认样式和默认事件。

#### 2.三者分离

三种技术存在重叠区域。

1.利用createElement和appendChild等DOM方法允许动态地创建和添加标记。

2.css中:hover和:focus之类的伪类效果允许根据用户触发事件改变元素呈现效果。

3.DOM样式给元素设定样式。

#### 3.style属性

文档里每个元素都是一个对象，每个元素都有一个style属性值，它们也是一个对象。

1.用DOM获取stlye对象的某个属性时，如果这个属性名没有特殊符号，则直接输入（eg：color），否则按驼峰命名法输入（eg：font-family）。

2.在某些浏览器中color属性以RGB格式的颜色值返回，即使与设置的颜色格式不同。

3.style属性是能用于内嵌样式。

4.用DOM设置的样式可以用DOM再把他们检索出来。

5.style对象的属性值永远是一个字符串。

#### 4.根据元素在节点树的位置来设置样式

1.CSS无法根据元素之间的相对位置关系来找出某个特定元素，可以用DOM来实现。

2.目的：为紧跟h1标签后面的p变标签更改它的样式。

3.用getElementByTagName找到所有h1元素。

4.使用for循环遍历所有元素。

5.h1[i].nextSibling可以找出文档中的下一节点。

6.需要找到的是“下一元素节点”，于是设置一个getNextElement函数。

```javascript
function getNextElement(node){
	if (node.nodeType == 1) {
		return node;
	}
	if (node.nextSibling) {
		return getNextElement(node.nextSibling);
	}
	return null;
}
```

7.得到下一元素节点，更改样式即可。

8.检查浏览器能否理解DOM方法。

#### 5.根据某种条件反复设置某种样式

1.这里设置一个表格，目的是奇数行和偶数行的背景不同，实现斑马线效果。

2.为了方便以后增减和修改，在浏览器不支持css3的情况下，进行函数的编写。

3.先把文档中所有table元素找出来。

4.找出每个table里的ty元素，创建odd变量变量并把它初始化为false。

5.遍历所有数据行。

6.如果变量odd的值是true，设置样式并把odd变量修改为false。

7.如果变量odd的值时false，不设置样式，把odd变量值修改为true。

8.检查浏览器能否理解DOM方法。

#### 6.className属性

1.className属性是一个可读/可写的属性，凡是元素节点都有这个属性。

2.如果目的是直接替换另一个class，则可以用element.className =  value;

3.如果原来没有任何class，直接对className属性赋值。

4.如果目的是追加一个class，element.className  += “ 新加的class名”（class名前有空格）

这种情况，

1）检查cassName属性的值是否为null。

2）如果是，把新的class设置值直接赋值给className属性。

3）如果不是，把一个空格和新的class设置值追加到className属性上去。

#### 7.对函数进行抽象

把一个非常具体的东西改进为一个较为通用的东西的过程叫做抽象。