var pic1 = document.getElementById("pic");
var pic2 = document.getElementById("pic2");
var pic3 = document.getElementById("pic3");
var pic4 = document.getElementById("pic4");
var pic5 = document.getElementById("pic5");
var visor = document.getElementById("dis");
var relleno = document.getElementById("relleno");

var mostrar = function(){
	visor.style.display="block"};


pic1.addEventListener("click", function(){
		relleno.src="palta_01.jpg"});

pic1.addEventListener("click", mostrar);

pic2.addEventListener("click", function(){
		relleno.src="palta_02.jpeg"});

pic2.addEventListener("click", mostrar);

pic3.addEventListener("click", function(){
		relleno.src="palta_03.jpeg"});

pic3.addEventListener("click", mostrar);

pic4.addEventListener("click", function(){
		relleno.src="palta_04.jpeg"});

pic4.addEventListener("click", mostrar);

pic5.addEventListener("click", function(){
		relleno.src="palta_05.jpeg"});

pic5.addEventListener("click", mostrar);
