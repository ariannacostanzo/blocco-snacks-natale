/*SNACK 6
Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente.*/

const number = parseInt(prompt('Inserisci un numero'));
message = Math.pow(number, 3);

// ! Validazione 

if (isNaN(number)) {
    alert('Devi necessariamente inserire un numero');
    message = 'Nessun risultato'
}

console.log(message);