console.log("Hola:)");

function validacion(){
    let buenas = 0;
    //Recuperar los valores de los inputs y almacenarlos en una variable
    const pregunta1 = document.getElementById("input1").value;
    const pregunta2 = document.getElementById("input2").value;
    const pregunta3 = document.getElementById("input3").value;
    const pregunta4 = document.getElementById("input4").value;
    const pregunta5 = document.getElementById("input5").value;
    const pregunta6 = document.getElementById("input6").value;
    const pregunta7 = document.getElementById("input7").value;

    let botonValidacion = document.getElementById("botonValidacion");
    let botonPlaylist = document.getElementById("botonPlaylist");


    //Validar si la respuesta es correcta
    if(pregunta1 == "2019-11-10"){ //Recopila la fecha de manera al reves
        console.log("Fecha bien")
        buenas += 1;
    }
    if(pregunta2 == 2){
        console.log("Pregunta 2 bien");
        buenas += 1;
    }
    if(pregunta3 == "Viernes 13"){
        console.log("Pregunta 3 bien");
        buenas += 1;
    }

    if(pregunta4 == "Escuela"){
        console.log("pregunta 4 bien");
        buenas += 1;
    }
    if(pregunta5 == 3){
        console.log("Pregunta 5 bien");
        buenas += 1;
    }
    if(pregunta6 == 3){
        console.log("Pregunta 6 bien");
        buenas += 1;
    }
    if(pregunta7 == "Soy perfecta"){
        console.log("Pregunta 7 bien");
        buenas += 1;
    }


    if(buenas == 7){
        botonPlaylist.style.display = "Block";
        botonValidacion.style.display = "None";
    }
    else{
        document.getElementById("error").style.display = "Block";
    }

    
}


 function playlistPage(){
    window.location.href = "/websimple/privateForm/playlist.html";
 }
