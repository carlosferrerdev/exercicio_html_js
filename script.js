document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var campoA = document.getElementById('campoA').value;
  var campoB = document.getElementById('campoB').value;
  var message = document.getElementById('message');

  if (campoB > campoA) {
      message.innerHTML = "Formulário válido!";
      message.style.color = "green";
  } else {
      message.innerHTML = "Formulário inválido! O número B deve ser maior que o número A.";
      message.style.color = "red";
  }
});
