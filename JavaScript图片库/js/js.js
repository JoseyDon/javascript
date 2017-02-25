//分离JavaScript和HTML标签
function prepareGallery(){
	if (!document.getElementsByTagName) {return false;}
	if (!document.getElementById) {return false;}
	if (!document.getElementById("ImagesGallery")) {return false;}
	var gallery = document.getElementById("ImagesGallery");
	var links = gallery.getElementsByTagName("a");
	for(var i = 0;i<links.length;i++){
		links[i].onclick = function(){
			return !showPic(this);
		}
		links[i].onkeypress = links[i].onclick;
	}
}
//点击链接占位图及文字更改为相应内容
	function showPic(whichpic){
		if (!document.getElementById('placeholder')) {return false;}
		var placeholder = document.getElementById('placeholder');
		var source = whichpic.getAttribute("href");
		if (placeholder.nodeName != 'IMG') {return false;}
		placeholder.setAttribute("src",source);
		if (document.getElementById('description')) {
		var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
		var description = document.getElementById('description');
		if(description.firstChild.nodeType == 3){
		description.firstChild.nodeValue = text;
	}
	}
	return true;
		}

/*childNodes nodeTYPE的应用
	function countBodyChildren(){
		var body_element = document.getElementsByTagName('body')[0];
		alert(body_element.childNodes.length);
		alert(body_element.nodeType);
	}
	window.onload=countBodyChildren;
*/
//把函数绑定到load事件。
function addLoadEvent(func){
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}

addLoadEvent(prepareGallery);

























