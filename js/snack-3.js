// SNACK 3
// Il software deve chiedere per 10 volte all'utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

let sum = 0;
let number = 0;

for (let i = 0; i < 10; i++) {
    number = parseInt(prompt('Inserisci un numero'));
    

    // ! Validazione

    if (isNaN(number)) {
        alert('Se non inserisci niente il numero è 0');
        number = 0;
    }

    sum += number;
    
}

console.log(sum);