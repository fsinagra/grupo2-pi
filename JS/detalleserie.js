let queryString = location.search;
console.log(queryString);

let queryObj = new URLSearchParams(queryString);
let id = queryObj.get("id");
console.log("ID de la serie:", id);

// Endpoint para traer la info de la serie
let url = `https://api.themoviedb.org/3/tv/${id}?api_key=3fa0a6eda99c0d478223db4a24042745&language=es-ES`;

fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    let section = document.querySelector(".info");
    console.log(data);

    section.innerHTML = `
      <h1>${data.name}</h1>
      <p><strong>Calificación:</strong> ${data.vote_average}</p>
      <p><strong>Fecha de estreno:</strong> ${data.first_air_date}</p>
      <p><strong>Temporadas:</strong> ${data.number_of_seasons}</p>
      <p><strong>Sinopsis:</strong> ${data.overview}</p>
    `;

    let imagen = document.querySelector(".portada img");
    imagen.src = "https://image.tmdb.org/t/p/w500/" + data.poster_path;
    imagen.alt = "Portada de " + data.name;
  })
  .catch(function(error){
    console.log(error);
  });
