function sortear() {
    var minimo = parseInt(document.getElementById("minimo").value);
    var maximo = parseInt(document.getElementById("maximo").value);
    var numero = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    document.getElementById("resultado").innerHTML = "O número sorteado foi: " + numero;
  }