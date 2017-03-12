function positionMessage() {
  if (!document.getElementById) return false;
  if (!document.getElementById("message1")) return false;
  var elem = document.getElementById("message1");
  elem.style.position = "absolute";
  elem.style.left = "150px";
  elem.style.top = "100px";
  moveElement("message1",500,450,5);
  var elem = document.getElementById("message2");
  elem.style.position = "absolute";
  elem.style.left = "150px";
  elem.style.top = "450px";
  moveElement("message2",150,100,5);
}
addLoadEvent(positionMessage);