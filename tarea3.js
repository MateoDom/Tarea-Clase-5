//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.


const $botonCalcular = document.querySelector('#calcular-tiempo');

$botonCalcular.onclick =function(){
const $horasVideo = document.querySelectorAll('#horas');
const $minutosVideo = document.querySelectorAll('#minutos');
const $segundosVideo = document.querySelectorAll('#segundos');

let horasTotales = 0;
let minutosTotales = 0; 
let segundosTotales = 0;

for (let i = 0; i < $horasVideo.length; i++){
  horasTotales = horasTotales + Number($horasVideo[i].value);
}
for (let i = 0; i < $minutosVideo.length; i++){
  minutosTotales = minutosTotales + Number($minutosVideo[i].value);
}
for (let i = 0; i < $segundosVideo.length; i++){
  segundosTotales = segundosTotales + Number($segundosVideo[i].value);
}
const totalSumaDeSegundos = horasTotales * 3600 + minutosTotales * 60 + segundosTotales;
let horaVideos = Math.floor(totalSumaDeSegundos / 3600);
let minutosVideo = Math.floor((totalSumaDeSegundos % 3600) / 60);
let segundosVideo = (totalSumaDeSegundos % 3600) % 60;

document.querySelector('#resultado').innerText = `La duracion total de los videos es de ${horaVideos} horas ${minutosVideo} minutos ${segundosVideo} segundos`;



return false;

}
