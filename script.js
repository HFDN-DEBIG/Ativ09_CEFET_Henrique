function adicionarInputs() {
  const quantidade = parseInt(document.getElementById('quantidade').value);
  const inputsDiv = document.getElementById('inputs');
  inputsDiv.innerHTML = '';

  for (let i = 1; i <= quantidade; i++) {
      inputsDiv.innerHTML += `<input type="number" id="num${i}" placeholder="Número ${i}"><br>`;
  }
}

function calcular() {
  const opcao = document.querySelector('input[name="opcao"]:checked').value;
  const quantidade = parseInt(document.getElementById('quantidade').value);
  let resultado = 0;

  if (opcao === 'soma_media') {
      let soma = 0;
      for (let i = 1; i <= quantidade; i++) {
          const num = parseFloat(document.getElementById(`num${i}`).value);
          soma += num;
      }
      const media = soma / quantidade;
      resultado = `Soma: ${soma}, Média: ${media.toFixed(2)}`;
  } else if (opcao === 'soma_impares') {
      const num1 = parseInt(document.getElementById('num1').value);
      const num2 = parseInt(document.getElementById('num2').value);

      let somaImpares = 0;
      for (let num = num1; num <= num2; num++) {
          if (num % 2 !== 0) {
              somaImpares += num;
          }
      }
      resultado = `Soma dos ímpares: ${somaImpares}`;
  }

  document.getElementById('resultado').textContent = resultado;
}