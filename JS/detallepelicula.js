let queryString = location.search;
console.log(queryString);

let queryObj = new URLSearchParams(queryString);
let id = queryObj.get("id");
console.log("ID:", id);

// URL para traer la info de la película (endpoint de detalle)
let url = `https://api.themoviedb.org/3/movie/${id}?api_key=3fa0a6eda99c0d478223db4a24042745`;

fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    let section = document.querySelector(".info");
    console.log(data);

    let contenido = "";

    contenido = `<h1>${data.title}</h1> 
    <p><strong>Calificación:</strong> ${data.vote_average}</p>
    <p><strong>Fecha de estreno:</strong> ${data.release_date}</p>
    <p><strong>Sinopsis:</strong> ${data.overview}</p>
    <p><strong>Género:</strong> ${obtenerGeneros(data.genres)}</p>`;

    section.innerHTML = contenido;
    let imagen = document.querySelector(".portada img");
    imagen.src = "https://image.tmdb.org/t/p/w500/" + data.poster_path;
    imagen.alt = "Portada de " + data.title;
  })
  .catch(function(error){
    console.log(error);
  });

  function obtenerGeneros(generosArray) {
    // Inicializo una variable para ir guardando los nombres (enlaces) de los géneros
    let generos = "";
    // Recorro el array de géneros que me llega como parámetro
    for (let i = 0; i < generosArray.length; i++) {
      // Por cada genero creo un enlace que lleva a la página de detalle de género, identificando con  el id del género 
      generos += `<a href="./detallegeneropelicula.html?id=${generosArray[i].id}&nombreGenero=${generosArray[i].name}">${generosArray[i].name}</a>`;
      // si no es el último género, agrego una coma y espacio para separarlos
      if (i < generosArray.length - 1) {
        generos += ", ";
      }
    }
    return generos;
  }
  
















 







