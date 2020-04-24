function myFunction() {
  var list = document.getElementsByClassName("menu");
  for(var i=0; i < list.length; i++){
     list[i].classList.toggle("show-menu");
  }
}