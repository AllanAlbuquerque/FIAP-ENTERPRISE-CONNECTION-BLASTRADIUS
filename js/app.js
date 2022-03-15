function toogleNav() {
  var menu = document.getElementById("menu");
  if (menu.className === "menu") {
    menu.className += " responsive";
  } else {
    menu.className = "menu";
  }
}