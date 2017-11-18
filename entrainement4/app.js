// faire une IFE qui s'éxecute quand la page est chargé qui récupère les elements (id) et qui les retourne dans le html 

 
(function entrainement4() {	
 window.onload=function() {
 console.log("la page est chargée");


var header = document.getElementById("h");
var nav = document.getElementById("n");
var aside = document.getElementById("a");
var main = document.getElementById("m");
var footer = document.getElementById("f");

console.log(header);
console.log(nav);
console.log(aside);
console.log(main);
console.log(footer);

main.innerHTML +="<p>"+header.id+"</p>";
}
})();
