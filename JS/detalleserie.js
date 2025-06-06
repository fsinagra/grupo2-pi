let queryString = location.search;
console.log(queryString);

let queryObj = new URLSearchParams(queryString);
let id = queryObj.get("id");
console.log("ID:", id);

let url = `https://api.themoviedb.org/3/tv/${id}?api_key=3fa0a6eda99c0d478223db4a24042745`;

fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    let section = document.querySelector(".info");
    console.log(data);

    section.innerHTML = `
      <h1>${data.original_name}</h1>
      <p><strong>Calificación:</strong> ${data.vote_average}</p>
      <p><strong>Fecha de estreno:</strong> ${data.first_air_date}</p>
      <p><strong>Sinopsis:</strong> ${data.overview}</p>
      <p><strong>Género:</strong> ${obtenerGeneros(data.genres)}</p>
    `;

    let imagen = document.querySelector(".portada img");
    imagen.src = "https://image.tmdb.org/t/p/w500/" + data.poster_path;
    imagen.alt = "Portada de " + data.title;
  })
  .catch(function(error){
    console.log(error);
  });
  function obtenerGeneros(generosArray) {
    let generos = "";
    // creo variable para ir guardando los nombres (enlaces) de los géneros
    // Recorro el array de géneros que me llega como parámetro
    for (let i = 0; i < generosArray.length; i++) {
      // Por cada género creo un enlace que me lleva a la página de detalle de género serie identificandolo con el id del género
      generos += `<a href="./detallegeneroserie.html?id=${generosArray[i].id}">${generosArray[i].name}</a>`;
      // agrego una coma y espacio para separar los géneros 
      if (i < generosArray.length - 1) {
        generos += ", ";
      }
    }
    return generos;
  }
  