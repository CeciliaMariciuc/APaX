function myFunction() {
    var list = document.getElementsByClassName("menu");
    for (var i = 0; i < list.length; i++) {
        list[i].classList.toggle("show-menu");
    }
}

function showRaspuns(raspuns) {
    var x = document.getElementById(raspuns);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}