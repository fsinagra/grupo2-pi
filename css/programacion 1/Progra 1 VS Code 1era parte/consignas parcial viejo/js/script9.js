window.addEventListener(
  'load',
  function()
  {


// 9.1)
// ESCRIBIR AQUI
let fullstack = []
let mobile = []
let marketing = []




// 9.2)
// ESCRIBIR AQUI

function asignarCurso(nombre, array) {
  array.push(nombre)
  return array

}


// 9.3)
// ESCRIBIR AQUI

fullstack = asignarCurso("a", fullstack)
fullstack = asignarCurso("b", fullstack)
fullstack = asignarCurso("c", fullstack)


mobile = asignarCurso("a", mobile)
mobile = asignarCurso("b", mobile)

marketing = asignarCurso("a", marketing)
marketing = asignarCurso("a", marketing)

console.log(fullstack);
console.log(mobile);
console.log(marketing);



  }
);
