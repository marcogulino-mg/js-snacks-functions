/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
/*
//FUNCTION
function firstChars(names) {
  //Array temporaneo
  const tempArr = [];

  //Scorro l'array names ed estraggo le iniziali di ogni indice
  for (let i = 0; i < names.length; i++) {
    tempArr.push(names[i][0]);
  }

  return tempArr;
}
*/

//ARROW FUNCTION
const firstChars = (names) => {
  //Array temporaneo
  const tempArr = [];

  //Scorro l'array names ed estraggo le iniziali di ogni indice
  for (let i = 0; i < names.length; i++) {
    tempArr.push(names[i][0]);
  }

  return tempArr;
}

// Invoca la funzione qui e stampa il risultato in console
//Copio l'array creato dalla funzione in un nuovo array
const initials = firstChars(names).slice();
console.log(initials);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
