window.onload = function(){
	var para = document.createElement("p");
	var text1 = document.createTextNode("This is");
	para.appendChild(text1);
	var emp = document.createElement("em");
	var text2 = document.createTextNode(" my " );
	emp.appendChild(text2);
	para.appendChild(emp);
	var text3 = document.createTextNode("content");
	para.appendChild(text3);
	var textdiv = document.getElementById('textdiv');
	textdiv.appendChild(para);
}