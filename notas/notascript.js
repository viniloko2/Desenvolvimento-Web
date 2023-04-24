function calcularMedia() {
    var nome = document.getElementById("nome").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var nota4 = parseFloat(document.getElementById("nota4").value);
    var media = (nota1 + nota2 + nota3 + nota4) / 4;

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Nome: " + nome + "<br>";
    resultado.innerHTML += "Média: " + media.toFixed(2) + "<br>";

    if (media >= 6.0) {
      resultado.className = "result aprovado";
      resultado.innerHTML += "Situação: Aprovado";
    } else if (media < 2.0) {
      resultado.className = "result reprovado";
      resultado.innerHTML += "Situação: Reprovado";
    } else {
      resultado.className = "result recuperacao";
      resultado.innerHTML += "Situação: Recuperação";
    }
  }