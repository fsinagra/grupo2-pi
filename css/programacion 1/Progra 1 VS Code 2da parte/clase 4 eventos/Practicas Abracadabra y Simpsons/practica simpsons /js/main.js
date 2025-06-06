

// completar las variables para que el programa funcione

window.addEventListener('load', function () {

    //capturar HTML 
    let titulo = document.querySelector("#titulo");
    let saludo = document.querySelector("#saludo");
    let span = document.querySelector("span");
    let bienvenida = document.querySelector(".bienvenida");
    let personajes = document.querySelector(".personajes");

    let bart = document.querySelector("#bart");
    let lisa = document.querySelector("#lisa");
    let homero = document.querySelector("#homero");
    let marge = document.querySelector("#marge");
    let maggie = document.querySelector("#maggie");


    // let section = document.querySelectorAll("article");
    // for (let i = 1; i < section.length; i++) {

    //    let personaje = "#"+ section[i].id;

    //    let personajeDOM = document.querySelector(personaje);
    //     // let spanPersonaje= document.querySelector("span");

    //    personajeDOM.addEventListener('click', function(e) {
    //     alert(section[i].id);

    //    })
    // }


    array = ["#bart", "#homero","#milhouse","#nelson"]
    arrayDobleClick = ["#lisa", "#bobPatinio","#duffman","#nelson"]
    arrayMouseEntrando =["#marge","#burns","#flanders","#gorgory"]
    arrayMouseSaliendo =[ "#maggie"]

    for (let i = 0; i < array.length; i++) {

        let personaje = array[i]

        let personajeDOM = document.querySelector(personaje);

        personajeDOM.addEventListener('click', function (e) {
            personaje.style.background = "yellow"            
        })

    }    

    for (let i = 0; i < arrayDobleClick.length; i++) {

        let personaje = arrayDobleClick[i]

        let personajeDOM = document.querySelector(personaje);

        personajeDOM.addEventListener('dblclick', function (e) {

        })
    }    

    for (let i = 0; i < arrayMouseEntrando.length; i++) {

        let personaje = arrayMouseEntrando[i]

        let personajeDOM = document.querySelector(personaje);

        personajeDOM.addEventListener('mouseover', function (e) {

        })

    }  

    for (let i = 0; i < arrayMouseSaliendo.length; i++) {

        let personaje = arrayMouseSaliendo[i]

        let personajeDOM = document.querySelector(personaje);

        personajeDOM.addEventListener('mouseout', function (e) {

        })

    } 

        titulo.addEventListener('mouseover', function (e) {
            /*Dispare una accion */
            let nombre = prompt("¿CÓMO TE LLAMÁS?");

            if (nombre == "") {
                alert("¡BIENVENIDO!")
            } else {
                saludo.innerText = `Bienvenido ${nombre}`;
                saludo.style.textTransform = "uppercase";

            }

            titulo.style.display = "none";
            span.style.display = "block";
            span.addEventListener("click", function (e) {
                bienvenida.style.display = "none";
                personajes.style.display = "flex";
            })
        })





        /* Capturar pesonajes + Asignarles a cada uno su evento correspondiente, 
        así como también su funcionalidad */


        /* Asignarle evento a la variable boton */
        let boton = "";


    }) 