var number = 1;

function fun() {
    number++;
    if (number > 3)
        number = 1;
    var img = document.getElementById("img");
    img.src = "pictures/pic" + number + ".png"
}
setInterval(fun, 1500);