function insertParagraph(text){
	var str = "<p>";
	str += text;
	str +="</p>";
	document.write(str);
}

window.onload = function(){
	var textdiv = document.getElementById('textdiv');
	alert(textdiv.innerHTML);
	var para = document.createElement("p");
	textdiv.appendChild(para);
	var txt = document.createTextNode("Hello World!");
	para.appendChild(txt);
}						