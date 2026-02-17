// Quiz answers
let a1 = "4";
let a2 = "islamabad";
let a3 = "blue";

function checkQuiz() {
  let score = 0;

  let q1 = document.getElementById("q1").value;
  let q2 = document.getElementById("q2").value.toLowerCase();
  let q3 = document.getElementById("q3").value.toLowerCase();

  if (q1 === a1) score++;
  if (q2 === a2) score++;
  if (q3 === a3) score++;

  let message = "";

  if (score === 3) message = "Excellent!";
  else if (score === 2) message = "Good Job!";
  else message = "Try Again!";

  document.getElementById("quizResult").innerText =
    "Your Score: " + score + "/3 — " + message;
}

function resetQuiz() {
  document.getElementById("q1").value = "";
  document.getElementById("q2").value = "";
  document.getElementById("q3").value = "";
  document.getElementById("quizResult").innerText = "";
}

function calculate() {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  let op = document.getElementById("operator").value;

  let result;

  if (op === "/" && n2 === 0) {
    alert("Division by zero not allowed");
    return;
  }

  if (op === "+") result = n1 + n2;
  if (op === "-") result = n1 - n2;
  if (op === "*") result = n1 * n2;
  if (op === "/") result = n1 / n2;

  let box = document.getElementById("calcResult");
  box.innerText = "Result: " + result;

  if (result >= 0) box.style.background = "lightgreen";
  else box.style.background = "lightcoral";
}
