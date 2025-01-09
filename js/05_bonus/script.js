/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

let name = prompt("Inserisci una parola");
let hour = parseInt(prompt("Indica l'ora"));

// Dichiara la funzione qui.
/*
//FUNCTION
function helloUser(nameUser, time) {
  let greetins;
  if (time <= 13) {
    greetins = "Buongiorno " + nameUser;
  } else if (time > 13 && time <= 17) {
    greetins = "Buonpomeriggio " + nameUser;
  } else {
    greetins = "Buonasera " + nameUser;
  }

  return greetins;
}
*/

//ARROW FUNCTION
const helloUser = (nameUser, time) => {
  let greetins;
  if (time <= 13) {
    greetins = "Buongiorno " + nameUser;
  } else if (time > 13 && time <= 17) {
    greetins = "Buonpomeriggio " + nameUser;
  } else {
    greetins = "Buonasera " + nameUser;
  }

  return greetins;
};

// Invoca la funzione qui e stampa il risultato in console
console.log(helloUser(name, hour));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
