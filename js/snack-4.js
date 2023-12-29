/*SNACK 4
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.*/

const names = ['ARIANNA', 'MARCO', 'PAOLO', 'VALERIO', 'ERICA', 'MATILDA', 'FRANCESCO'];

const nameToCheck = (prompt('Come ti chiami?')).toUpperCase();


let message = 'Non puoi partecipare alla festa'

for (let i = 0; i < names.length; i++) {
    if (nameToCheck == names[i]) {
        message = 'puoi partecipare alla festa';
    }

}

console.log(message);