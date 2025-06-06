let nombre = prompt("Ingresa tu nombre")


document.querySelector("h1").innerText = `bienvenido ${nombre}`


let edad = prompt("cuantos años tenes?")


if (edad > 17) {
  
} else {
   document.querySelector(".container-general").style.display = "none"
   document.querySelector("#accesoDenegado").style.display = "block"
}


let respuesta = confirm("te gusta la programación?")


if (respuesta) {
   document.querySelector(".background-img").innerHTML = `<img src="./img/programmer.jpeg">`
} else {
   document.querySelector(".background-img").innerHTML = `<img src="./img/gatito.jpeg">`
}


let imagen = document.querySelector("img")
let ruta = prompt("Indicame la ruta de una imagen")


imagen.src = ruta


let nombre1 = prompt("ingresa tu nombre")
let director = prompt("ingresa el director")
let duracion = prompt("ingresa la duracion")
let actor = prompt("ingresa el actor")


pelicula = {
   respNombre: nombre1
   respDirecto: director
   respDuracion: duracion
   respActor: actor
}
let nombre = prompt("Ingresa tu nombre")


document.querySelector("h1").innerText = `bienvenido ${nombre}`


let edad = prompt("cuantos años tenes?")


if (edad > 17) {
  
} else {
   document.querySelector(".container-general").style.display = "none"
   document.querySelector("#accesoDenegado").style.display = "block"
}


let respuesta = confirm("te gusta la programación?")


if (respuesta) {
   document.querySelector(".background-img").innerHTML = `<img src="./img/programmer.jpeg">`
} else {
   document.querySelector(".background-img").innerHTML = `<img src="./img/gatito.jpeg">`
}


let imagen = document.querySelector("img")
let ruta = prompt("Indicame la ruta de una imagen")


imagen.src = ruta


let nombre1 = prompt("ingresa tu nombre")
let director = prompt("ingresa el director")
let duracion = prompt("ingresa la duracion")
let actor = prompt("ingresa el actor")


pelicula = {
   respNombre: nombre1
   respDirecto: director
   respDuracion: duracion
   respActor: actor
}
