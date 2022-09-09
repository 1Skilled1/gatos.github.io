//usando selectores dentro del elemento
const questions = document.querySelectorAll(".question");
//Esta declaración crea una constante cuyo alcance puede ser global o local para el bloque en el que se declara. 
//Es necesario inicializar la constante, es decir, se debe especificar su valor en la misma sentencia en la que se declara, 
//lo que tiene sentido,dado que no se puede cambiar posteriormente

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", function () {

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

var makeItRain = function() {

  var increment = 0;
  var drops = "";
  var backDrops = "";

  while (increment < 100) {
    //emparejar números aleatorios para usar en varias aleatorizaciones
    //número aleatorio entre 98 y 1
    var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
    //número aleatorio entre 5 y 2
    var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
    //incremento
    increment += randoFiver;
    //agregue una nueva gota de lluvia con varias aleatorizaciones a ciertas propiedades de CSS
    drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
  }

  $('.rain.front-row').append(drops);
  $('.rain.back-row').append(backDrops);
}



makeItRain();