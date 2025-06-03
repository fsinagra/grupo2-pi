
const URL = "https://api.themoviedb.org/3/movie/popular?api_key=3fa0a6eda99c0d478223db4a24042745";

let secciones = document.querySelectorAll(".principal");
  
fetch(URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let pelis = data.results;

    let posicion = 0; // contador para recorrer el array de pelis de a 5 en cada sección

    for (let i = 0; i < secciones.length; i++) {
      let contenido = "";

      for (let j = 0; j < 5; j++) {
        if (posicion < pelis.length) {
          let pelicula = pelis[posicion];
          contenido += `
            <article>
              <a href="./detallepelicula.html?id=${pelicula.id}">
                <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${pelicula.title}">
              </a>
              <p>Título: ${pelicula.title}</p>
              <p>Estreno: ${pelicula.release_date}</p>
            </article>
          `;
          posicion++; // sumamos 1 para pasar a la siguiente peli
        }
      }

      secciones[i].innerHTML = contenido;
    }
  })
  .catch(function (error) {
    console.log(error);
  });



  