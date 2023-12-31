// SNACK 9
// Calcola la somma e la media dei primi 10 numeri

const numbers = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;
let average = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

average = sum / numbers.length;

console.log('Somma: ' + sum, 'Media: ' + average);