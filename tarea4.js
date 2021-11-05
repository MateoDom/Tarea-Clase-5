//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es...

const listaNumero = document.querySelectorAll('li');
let array = [];

for (let i = 0; i < listaNumero.length; i++){
  array.push(Number(listaNumero[i].innerText));
}

function calcularPromedio(){
  let totalSuma = 0

  for (let i = 0; i < array.length; i++){
      totalSuma += array[i];
  }
  let promedio = totalSuma/ array.length
  return document.querySelector("#promedio").innerText = Math.floor(promedio);
}

calcularPromedio(array);

function encontrarNumeroMenor (){
  numeroMasChico = Math.min(...array);
 
  return document.querySelector("#menor").innerText = numeroMasChico;
}
encontrarNumeroMenor(array); 

function encontrarNumeroMayor (){
  numeroMasGrande = Math.max(...array);
 
  return document.querySelector("#mayor").innerText = numeroMasGrande;
}
encontrarNumeroMayor(array); 


function encontrarNumeroMasFrecuente () {
  let numeroMasFrecuente = 0
  let contador = 0
  for (let i = 0; i < array.length; i++){
     
      for ( let j = 0; j < array.length; j++){
          if (array[i] === array[j]){
              contador++
          }
      }

      if (contador > numeroMasFrecuente){
          numeroMasFrecuente = array[i]
      }
  }
  return document.querySelector('#frecuente').innerText = numeroMasFrecuente;


}
encontrarNumeroMasFrecuente(array);