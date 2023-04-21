
function calificar(){
    let total = 5;
    let puntos = 0;

    let myform = document.forms["formulario"];
    let respuestascorrectas = ["c", "a", "b", "c", "d" ]; 

    for (let i = 1; i <= total; i++ ) {
        if (myform["r" + i].value == null || myform["r" + i].value == ''){
        alert('Aun faltan preguntas por responder');
        return false;             
        } else {
            if (myform["r" + i ].value === respuestascorrectas [i - 1])
            puntos++;
        }
    }
    let resultado = document.getElementById('questionario');
    resultado.innerHTML = "Obtuviste "+puntos+" puntos de "+ total+ " posibles";
    return false; 
}