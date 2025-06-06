//ej 1

let miNombre = "tomas"
localStorage.setItem("userName", miNombre)
console.log(localStorage);

let recuperoStorage = localStorage.getItem("userName")
console.log(recuperoStorage);

localStorage.clear()

//ej 2

let peliculasFavoritas = ["The shawshank redemption", "Venga y vea", "Parasite"]
localStorage.setItem("peliculaFavorita", peliculasFavoritas[1])
console.log(localStorage);

//salteo resto del 2

//ej 5

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
];

winterIsComing = []

for (let index = 0; index < got.length; index++) {
    if (got[index].ciudad == "Winterfell") {
        winterIsComing.push(got[index])
    } else {
        
    }
    
}

console.log(winterIsComing);


let winterIsComingString = JSON.stringify(winterIsComing)
localStorage.setItem("winterfell", winterIsComingString)

console.log(localStorage);