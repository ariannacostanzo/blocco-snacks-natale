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