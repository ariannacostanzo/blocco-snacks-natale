/*SNACK 2
L'utente inserisce due parole in successione, con due prompt. 
Il software stampa prima la parola più corta, poi la parola più lunga.*/

console.log('js ok');

const firstWord = prompt('Inserisci una parola');
const secondWord = prompt('Inserisci un\' altra parola');


// ! Validazione

if (!firstWord || !secondWord) {
    alert('Devi inserire qualcosa');
    
}

let message = `${firstWord} e ${secondWord} hanno la stessa lunghezza`

if (firstWord.length < secondWord.length) {
    message = `${secondWord} è più lunga di ${firstWord}`;
} else if (firstWord.length > secondWord.length) {
    message = `${firstWord} è più lunga di ${secondWord}`;
}

console.log(message);