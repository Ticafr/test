function myFunction() {
    var text = "";
    var i;
    for (i = 0; i < 999999; i++) {
        text += "Couscous N° " + i + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
}