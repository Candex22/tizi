function porencima(x) {
 x.style.color = "#FF5C8A";
}
function porencima2(x) {
 x.style.color = "lightblue";
}
function porencima3(x) {
 x.style.color = "purple";
}
function porencima4(x) {
    x.style.color = "cyan";
}
function alquitar(x) {
x.style.color = "white";
}
function calculocritico() {
    var probcrit = document.getElementById("prob").value;
    var bono1 = 40;
    var bono2 = 15;
    var probfinal = Number(probcrit) + Number(bono1) + Number(bono2);
    document.getElementById("probfinal").innerHTML= probfinal;
}