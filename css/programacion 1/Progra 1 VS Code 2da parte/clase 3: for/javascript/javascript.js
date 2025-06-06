//Ejercicio 3

let ganancias = [1,2,3,4,5,1,2,3,4,5]

let suma = 0

for (let index = 0; index < ganancias.length; index++) {
    suma += ganancias[index];
    console.log(suma);
}

console.log(suma);

//Ejercicio 5

let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
]

for (let i = 0; i < got.length; i++) {
    let nombre = got[i].nombre
    let apellido = got[i].apellido
    let ciudad = got[i]. ciudad
    console.log(`hola ${nombre} ${apellido} criatura viajera!`);
    console.log(`soy ${nombre} ${apellido} de la ciudad ${ciudad}`);   
}