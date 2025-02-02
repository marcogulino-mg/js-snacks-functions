/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
let letter = prompt(
  "Inserisci la lettera iniziale con cui filtrare la lista di nomi"
).toUpperCase();

// Dichiara la funzione qui.
/*
//FUNCTION
function searchInitials(initial, words) {
  //Array temporaneo
  const tempArr = words.filter((word) => word.startsWith(initial));
  return tempArr;
}
*/

//ARROW FUNCTION
const searchInitials = (initial, words) => words.filter((word) => word.startsWith(initial));

// Invoca la funzione qui e stampa il risultato in console
const filteredNames = searchInitials(letter, names);
console.log(filteredNames);
//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
