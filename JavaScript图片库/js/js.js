//点击链接占位图及文字更改为相应内容
	function showPic(whichpic){
		var placeholder = document.getElementById('placeholder');
		var source = whichpic.getAttribute("href");
		placeholder.setAttribute("src",source);
		var text = whichpic.getAttribute("title");
		var description = document.getElementById('description');
		description.firstChild.nodeValue = text;
	}

/*childNodes nodeTYPE的应用
	function countBodyChildren(){
		var body_element = document.getElementsByTagName('body')[0];
		alert(body_element.childNodes.length);
		alert(body_element.nodeType);
	}
	window.onload=countBodyChildren;
*/