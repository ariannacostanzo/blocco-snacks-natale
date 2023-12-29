/*SNACK 5 
Crea un array vuoto. Chiedi per 6 volte all'utente di inserire un numero, se è dispari inseriscilo nell'array.*/

const oddNumbers = [];

for (let i = 0; i < 6; i++) {
    const numberAsked = parseInt(prompt('Inserisci un numero'));

    // * Se il numero inserito è dispari e non è nan allora lo aggiungo all'array
    if (numberAsked % 2 !== 0 && !isNaN(numberAsked)) {
        oddNumbers.push(numberAsked);
    }
}

console.table(oddNumbers);