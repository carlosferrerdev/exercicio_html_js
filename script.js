document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var campoA = document.getElementById('campoA').value;
  var campoB = document.getElementById('campoB').value;
  var message = document.getElementById('message');

  if (campoB === campoA) {
      message.innerHTML = "Os números digitados são iguais.";
  } else if (campoB > campoA) {
      message.innerHTML = "Formulário inválido! O número B deve ser maior que o número A.";
  } else {
      message.innerHTML = "Formulário válido!";
  }
});
