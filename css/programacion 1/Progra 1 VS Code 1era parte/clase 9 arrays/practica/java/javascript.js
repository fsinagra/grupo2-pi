let a = ["hola", "mundo"]
let b = ["hola", "todo", "el", "mundo"]

let ab = [a, b]

console.log(ab);

/*EJ B*/

let frutas = ["banana", "naranja", "limon", "manzana", "mango"]
let citricos = []

citricos.push(frutas[1], frutas[2])

console.log(citricos);

/*EJ C*/

console.log(frutas.length);

/*EJ D*/

frutas.push("frutilla", "melon")
console.log(frutas.length);

/*EJ E*/

console.log([].length);
console.log([2, 11, 17, 32, 36, 39]);
console.log("lalalala".length);


/*EJ 3*/


let abuelos = ["abu1", "abu2"]

let padres = []
padres.push("papi1", "papi2")

let hijos = ["hijo1", "hijo2"]

let nietos = []
nietos.push("nieto1", "nieto2")

let arbol_gen = [abuelos, padres, hijos, nietos]

console.log(arbol_gen[0].length + arbol_gen[1].length + arbol_gen[2].length+ arbol_gen[3].length);
console.log(arbol_gen[0][0], arbol_gen[1][0], arbol_gen[2][0], arbol_gen[3][0]);






