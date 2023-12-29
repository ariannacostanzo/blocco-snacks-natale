// SNACK 1
// L'utente inserisce due numeri in successione, con due prompt. Il softare stampa il maggiore.


console.log('js ok');

const firstNumber = parseInt(prompt('Inserisci un numero'));
const secondNumber = parseInt(prompt('Inserisci un altro numero'));


// ! Validazione

if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert('Devi inserire dei numeri');
}

let message = `I numeri sono uguali: ${firstNumber}, ${secondNumber}`

if (firstNumber > secondNumber) {
    message = firstNumber
} else if (firstNumber < secondNumber) {
    message = secondNumber
} 

console.log(message);