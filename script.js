var texto = "Tiz, Soluções Online.";
var delay = 50;
var container = document.getElementById("texto");
var i = 0;

function escreverTexto() {
  container.innerHTML += texto.charAt(i);
  i++;
  if (i < texto.length) {
    setTimeout(escreverTexto, delay);
  }
}

escreverTexto();




