function stripeTables(){
	if (!document.getElementsByTagName) {return false;}
	var table = document.getElementsByTagName("table");
	var odd rows;
	for (var i = 0; i < table.length; i++) {
		odd = false;
		rows =table[i].getElementsByTagName("tr");
		for (var j = 0; j < rows.length; j++) {
			if (odd == true) {
			addClass(rows[j],"odd");
			odd = false;
		}else{
			odd = true;
		}
		}
	}
}
addLoadEvent(stripeTables);