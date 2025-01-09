/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

let name = prompt("Inserisci una parola");

// Dichiara la funzione qui.
/*
//FUNCTION
function helloUser(nameUser) {
  let greetins;
  let hours = randomNumber(0, 23);
  console.log(hours);
  if (hours <= 13) {
    greetins = "Buongiorno " + nameUser;
  } else if (hours > 13 && hours <= 17) {
    greetins = "Buon pomeriggio " + nameUser;
  } else {
    greetins = "Buonasera " + nameUser;
  }

  return greetins;
}
*/

//Funzione che genera un numero casuale
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//ARROW FUNCTION
const helloUser = (nameUser) => {
  let greetins;
  let hours = randomNumber(0, 23);
  console.log(hours);

  if (hours <= 13) {
    greetins = "Buongiorno " + nameUser;
  } else if (hours > 13 && hours <= 17) {
    greetins = "Buon pomeriggio " + nameUser;
  } else {
    greetins = "Buonasera " + nameUser;
  }

  return greetins;
};

// Invoca la funzione qui e stampa il risultato in console
console.log(helloUser(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
