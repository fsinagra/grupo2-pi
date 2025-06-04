let url = "https://api.themoviedb.org/3/genre/movie/list?api_key=3fa0a6eda99c0d478223db4a24042745";

fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data);

    let generos = data.genres;
    let lista = document.querySelector(".generos");
    let contenido = "";

    for (let i = 0; i < generos.length; i++) {
      contenido = contenido + `
        <li>
          <a href="./detallegenero.html?id=${generos[i].id}">
            ${generos[i].name}
          </a>
        </li>
      `;
    }

    lista.innerHTML = contenido;
  })
  .catch(function(error){
    console.log(error);
  });
