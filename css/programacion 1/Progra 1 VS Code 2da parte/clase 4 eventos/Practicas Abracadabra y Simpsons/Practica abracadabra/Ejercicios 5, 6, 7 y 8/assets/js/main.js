//Ejercicio 5


function colorAlAzar(){
    let colores = ["Black", "Green", "Yellow", "Violet", "Blue"]
    let numero = Math.floor(Math.random()*5)
    let color = colores[numero]
    console.log(color);
    return color
}



//Ejercicio 6

let contactButton = document.querySelector("#contactButton")
//AGREGAR: id = "contactButton" en el html donde dice get in touch with me
let texto = document.querySelector(".parrafo-color")

contactButton.addEventListener("click", function(e) {
    let color = colorAlAzar();
    texto.style.color = color;
} )

//Ejercicio 7

let rowLeft = document.querySelector(".left")
let rowCenter = document.querySelector(".center")
let rowRight = document.querySelector(".right")


rowLeft.addEventListener("click", function(e) {
    alert("Consequat Lorem")
})

rowCenter.addEventListener("dblclick", function(e) {
    alert("Lorem dolor tempus")
})

rowRight.addEventListener("mouseover", function(e) {
    alert("Feugiat Posuere")
})

//Ejercicio 8

//AGREGAR: id = "footerButton" en el html donde dice "see some of my recent work"

let footerButton = document.querySelector("#footerButton")

//AGREGAR: id = "parrafoFooter" en el parrafo encima de donde dice "see some of my recent work"
let parrafoFooter = document.querySelector("#parrafoFooter")

footerButton.addEventListener("mouseover", function(e) {
    let colorParrafo = colorAlAzar();
    parrafoFooter.style.color = colorParrafo
})

footerButton.addEventListener("mouseout", function(e) {
    parrafoFooter.style.color = "#888"
})





