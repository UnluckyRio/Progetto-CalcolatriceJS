// Dichiarazione Var. Display
const display = document.getElementById("display"); // Ottiene l'elemento display
function appendToDisplay(symbol) {
  const lastChar = display.value.slice(-1);
  const operators = ["+", "-", "*", "/"];

  if (operators.includes(symbol) && operators.includes(lastChar)) {
    // Se l'ultimo carattere è un operatore e il nuovo simbolo è un operatore, non aggiungerlo
    // O potresti voler sostituire l'operatore esistente
    display.value = display.value.slice(0, -1) + symbol; // Sostituisce l'ultimo operatore
  } else {
    display.value += symbol;
  }
}
function clearDisplay() {
  // Pulisce il display
  display.value = ""; // Stringa vuota
}
function calculateResult() {
  // Calcola il risultato
  display.value = eval(display.value); // eval() calcola l'espressione

  // Dichiarazione Var. Buttons
  const buttons = document.querySelectorAll(".button");
}
