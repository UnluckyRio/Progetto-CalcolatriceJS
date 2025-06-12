// Dichiarazione Var. Display
const display = document.getElementById("display"); // Ottiene l'elemento display
function appendToDisplay(symbol) {
  const lastChar = display.value.slice(-1); // Ottiene l'ultimo carattere del display
  const operators = ["+", "-", "*", "/"]; // Controlla se l'ultimo carattere è un operatore

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
  try {
    // Calcola il risultato
    let result = new Function("return " + display.value)(); // Ho introdotto 'result' per chiarezza

    // Gestione di Infinity (divisione per zero) e NaN (Not a Number, es. espressioni vuote)
    if (isNaN(result) || !isFinite(result)) {
      // isFinite controlla anche per Infinity
      display.value = "Error"; // Mostra "Error" per divisione per zero o input non validi
    } else {
      display.value = result;
    }
  } catch (error) {
    // In caso di errore di parsing o espressione non valida
    display.value = "Error";
  }

  // Rimozione automatica di "Error" o "undefined"
  if (display.value === "Error" || display.value === "undefined") {
    // Timer per pulire il display dopo 2 secondi (2000 millisecondi)
    setTimeout(() => {
      clearDisplay(); // Chiama la tua funzione clearDisplay() per pulire
    }, 2000); // 2000 millisecondi = 2 secondi
  }
}

// Dichiarazione Var. Buttons
const buttons = document.querySelectorAll(".button");
