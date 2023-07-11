//funcion de imagen sobre mi//
window.onscroll = function () {
  miFuncion();
};

let sobre = document.getElementById("sobre");

let distancia_sobre;

function miFuncion() {
  distancia_sobre = window.innerHeight - sobre.getBoundingClientRect().top;
  if (distancia_sobre >= 200) {
    sobre.classList.add("efecto-sobre");
  }
}
