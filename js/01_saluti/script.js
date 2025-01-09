/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

let userName = prompt("Insersci il tuo nome");

// Dichiara la funzione qui.
/*
FUNCTION
function helloUser(name) {
  let greetings = "Ciao " + name;
  return greetings;
}
*/

//ARROW FUNCTION
const helloUser = (name) => "Ciao " + name;

// Invoca la funzione qui e stampa il risultato in console
console.log(helloUser(userName));

//Risultato atteso se si passa 'Mario': // ciao Mario
