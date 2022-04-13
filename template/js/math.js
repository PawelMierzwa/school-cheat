var rodzaj;
var wzor;
function Choose() {
    var wybor = document.getElementById("wzor").value;
    rodzaj = wybor.split(":",1);
    wzor = wybor.split(":",2);

    return rodzaj,wzor;
}