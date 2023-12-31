/*SNACK 8
Chiedi un numero di 4 cifre all'utente e calcola 
la somma di tutte le cifre che compongono il numero.*/

const number = prompt('Inserisci un numero a 4 cifre');
let sum = 0;

//Con questo metodo creo un array i cui elementi sono le singole lettere(in questo caso numeri) del prompt
const numbersToSum = number.split('')


for (let i = 0; i < numbersToSum.length; i++) {
    sum += parseInt(numbersToSum[i]);
}

if (isNaN(sum)) {
    sum = 'devi inserire un numero a 4 cifre'
}

console.log(sum);