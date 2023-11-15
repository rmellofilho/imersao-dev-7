let numeroAleatorio = Math.floor(Math.random() * 1000) + 1;
let palpite;
let maxTentativas = parseInt(prompt("Digite o número máximo de tentativas:"));
let numeroTentativas = 0;

if (!Number.isNaN(maxTentativas) && maxTentativas > 0) {
  while (numeroTentativas < maxTentativas) {
    let entrada = prompt(`Tentativa ${numeroTentativas + 1}/${maxTentativas}. Tente adivinhar o número (entre 1 e 1000):`);
    palpite = parseInt(entrada);

    if (!Number.isNaN(palpite) && palpite >= 1 && palpite <= 1000) {
      if (palpite === numeroAleatorio) {
        alert(`Parabéns! Você acertou o número em ${numeroTentativas + 1} tentativas.`);
        break;
      } else if (palpite < numeroAleatorio) {
        alert("Tente um número maior.");
      } else {
        alert("Tente um número menor.");
      }
      numeroTentativas++;
    } else {
      alert("Por favor, insira um número válido entre 1 e 1000.");
    }
  }

  if (numeroTentativas === maxTentativas) {
    alert(`Você atingiu o número máximo de tentativas (${maxTentativas}). O número era ${numeroAleatorio}. Game Over!`);
  }
} else {
  alert("Por favor, insira um número válido para o número máximo de tentativas.");
}
