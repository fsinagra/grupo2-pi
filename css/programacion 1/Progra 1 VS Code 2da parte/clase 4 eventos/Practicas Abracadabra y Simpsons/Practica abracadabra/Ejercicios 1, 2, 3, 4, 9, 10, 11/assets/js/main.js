let abracadabra= document.querySelector("#abracadabra");
let titular= document.querySelector('#titular')
abracadabra.addEventListener('click',function() {

    let mensaje= "ingrese su nombre ";
    let resultado= prompt(mensaje);
    titular.innerText= `Hi. I'm ${resultado}`;

});
let buttonbigscrolly = document.querySelector("#contactButton")
let parrafocolorrojo= document.querySelector(".parrafo-color")
buttonbigscrolly.addEventListener("dblclick",function(e){

    parrafocolorrojo.style.color = "RED";

});
let lechuza = document.querySelector("#lechuza")

lechuza.addEventListener("click",function(e){
    alert("bhu bhu...");
});

window.addEventListener('keypress', function(e) {
	console.log(e);
console.log(e.key);
console.log("tocaste una tecla ")


    if (e.key== " ") {
        alert("ups precionaste el espacio")
        
    }
   

});

let buttonWork= document.querySelector("#buttonWork")


