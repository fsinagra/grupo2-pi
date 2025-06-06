console.log("Lograste víncularme correctamente");


/* Punto 8.b: Creá las variables. 👇 Completar código entre estas lineas */
let nombre = "Tomas Kearney"
let edad = 19
let talle = 46
let fan = "Soy fan"
/* Punto 8.b: Creá las variables. 👆 Completar código entre estas lineas */

document.querySelector('.name').innerText += " " + nombre;
document.querySelector('.age').innerText +=  " " + edad;
document.querySelector('.size').innerText +=  " " + talle;
if(fan){
	document.querySelector('.sportsfan').innerText +=  " Soy fan";
} else {
	document.querySelector('.sportsfan').innerText +=  " No soy fan";
}

/* Punto 8.c: Creá 2 nuevas variables. 👇 Completar código entre estas lineas */
let deportes = ["tenis", "futbol", "basquet"]
let hobbies = ["ver peliculas", "jugar al tenis", "juntarme con amigos"]
/* Punto 8.c: Creá 2 nuevas variables. 👆 Completar código entre estas lineas */

let divSports = document.querySelector(".sports-list"); /* 👈 Sección deportes */
let divHobbies = document.querySelector(".hobbies-list"); /* 👈 Sección hobbies */

function mostrarDatos(datos, elementoHTML){
	for(let i=0; i<datos.length; i++){
		elementoHTML.innerHTML += `<li>${datos[i]}</li>`
	}
	return true
}

/* Punto 8.d: Ejecutá la función aquí 👇 Completar código entre estas lineas */
mostrarDatos(deportes, divSports)
mostrarDatos(hobbies, divHobbies)
/* Punto 8.d: Ejecutá la función aquí 👆 Completar código entre estas lineas */


/* Punto 8.e: creá la función aquí 👇 Completar código entre estas lineas */

/* Punto 8.e: creá la función aquí 👆 Completar código entre estas lineas */
function misDatos(unNombre, unaEdad, unTalle){
	return  `Hola. Mi nombre es ${unNombre}. Tengo ${unaEdad} años. Mi talle de zapatos es: ${unTalle}`
}

console.log(misDatos(nombre, edad, talle));
