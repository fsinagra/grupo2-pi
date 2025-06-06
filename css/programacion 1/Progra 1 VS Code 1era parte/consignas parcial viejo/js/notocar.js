function mostrarMateria
(
  Materia,
  booleano
)
{
  var profes = "";
  var alumnos = "";
  var texto = "";
  for ( var atributo in Materia ) {
    if ( Materia.hasOwnProperty( atributo ) )
    {
        if ( atributo == "nombre" )
        {
            // alert(atributo);
            texto += "Has creado la materia: <span style='font-size: 2rem; color: blue;'>" +  Materia.nombre + "</span>.";
            texto += "<br>";
        }
        else if ( atributo == "diaDeCursada" )
        {
            // alert(atributo);
            texto += "<br>";
            texto += "Se cursa los: <span style='font-size: 2rem; color: blue;'>" +  Materia.diaDeCursada + "</span>.";
            texto += "<br>";
        }
        else if ( atributo == "esLaMejorMateria" )
        {
            // alert(atributo);
            texto += "<br>";
            if ( Materia.esLaMejorMateria )
            {
                texto += "Ésta materia <span style='font-size: 2rem; color: blue;'> es la mejor </span> de la carrera!";
            }
            else if ( Materia.esLaMejorMateria === false )
            {
                texto += "Que pena, que <span style='font-size: 2rem; color: blue;'> no sea </span> la mejor materia!";
            }
            texto += "<br>";
        }
        else if ( atributo == "profes")
        {
          // alert(atributo);
          if (Materia.esLaMejorMateria)
          {
            for ( var i = 0; i < Materia.profes.length; i++ )
            {
              if ( i+1 < Materia.profes.length )
              {
                profes += Materia.profes[i] + ", ";
              }
              else
              {
                profes += Materia.profes[i] + ".";
              }
            }
            // alert(hobbies);
            texto += "<br>";
            texto += "Los profes de la materia son: ";
            texto += "<br>";
            texto += "<span style='font-size: 2rem; color: blue;'>" + profes + "</span>";
            texto += "<br>";
          }
        }
        else if ( atributo == "alumnos" )
        {
          if ( booleano )
          {
            // alert(atributo);
            for ( var i = 0; i < Materia.alumnos.length; i++ )
            {
              if ( i+1 < Materia.alumnos.length )
              {
                alumnos += Materia.alumnos[i] + ", ";
              }
              else
              {
                alumnos += Materia.alumnos[i] + ".";
              }
            }
            // alert(hobbies);
            texto += "<br>";
            texto += "Los alumnos de la materia son: ";
            texto += "<br>";
            texto += "<span style='font-size: 2rem; color: blue;'>" + alumnos + "</span>";
            texto += "<br>";
          }
        }
        else if ( atributo == "cursar" )
        {
            // alert(atributo);
            texto += "<br>";
            texto += "Si escribiste correctamente el método <span style='font-size: 2rem; color: blue;'> cursar </span>, deberías ver impreso en la consola: 'Que bueno, voy a cursar la materia: "+ Materia.nombre+"!'";
            console.log( Materia.cursar() );
            texto += "<br>";
        }
        else if ( atributo == "nuevoAlumno" )
        {
            // alert(atributo);
            texto += "<br>";
            texto += "Si escribiste correctamente el método <span style='font-size: 2rem; color: blue;'> nuevoAlumno </span>, invocándolo deberías poder agregar alumnos. ";
            texto += "<br>";
        }
        else
        {
            alert("El atributo o metodo : '" + atributo + "' es incorrecto.");
        }
    }
  }
  // alert(texto);
  document.querySelector("#usuario").innerHTML = texto;
  document.querySelector('#usuario').style.color = "black";
  document.querySelector('#js-2').style.backgroundColor = "gainsboro";
  document.querySelector('#js-2').style.textAlign = "center";
  document.querySelector('#js-2').style.padding = "100px 25px";
};
