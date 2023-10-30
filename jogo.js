let attempts = 0; let bulls = 0; let cows = 0;
let secretNumber = generateSecretNumber();
console.log(secretNumber);



function checkGuess() {
  let guess = document.getElementById("guessInput").value;
  let secretString = secretNumber.join('');
  bulls = 0; cows = 0;

  const checkGuessLength = new Set(guess);

  if (guess.length !== checkGuessLength.size || guess.length !== 4) {
    document.getElementById("logsArea").value += `${guess} INVALIDO!!!!, digite números de até 4 caracteres e os numeros nao podem ser iguais.\n`;
    return null;
  }

  attempts += 1;

  for (let i = 0; i < 4; i += 1) {
    if (secretString[i] === guess[i]) {
      bulls += 1;
    } else if (secretString.includes(guess[i])) {
      cows += 1;
    }
  }

  if (bulls === 4) {
    document.getElementById("logsArea").value += `${secretString} | PARABENSSSSS VOCE VENCEUUU!!!!!!!!.\n`;
  } else if (attempts === 8) {
    document.getElementById("logsArea").value += `${secretString} | Infelizmente você saiu derrotado.\n`;
  }

  document.getElementById("logsArea").value += `${guess} - ${bulls} Bulls ${cows} Cows, tentativa: ${attempts}\n`;
}

function generateSecretNumber() {
  const numbers = Array.from({ length: 9}, (v, k) => k + 1);
  let currentIndex = numbers.length, randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    [numbers[currentIndex], numbers[randomIndex]] = [numbers[randomIndex], numbers[currentIndex]];
  }

  return numbers.slice(0, 4);
}

function clearLogs() {
  document.getElementById("logsArea").value = "";
}

