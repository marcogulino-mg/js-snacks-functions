/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

let word = prompt("Inserisci una parola");


// Dichiara la funzione qui.

/*
//FUNCTION
function vowelsNum(text) {
    //Creo un array riempito con le lettere che rispettano le condizioni di .match()
    const tempArr = text.match(/[aeiou]/gi);

    let count = tempArr.length + " " + tempArr;
    return count;
}
*/

//ARROW FUNCTION
const vowelsNum = (text) => {
    const tempArr = text.match(/[aeiou]/gi);

    let count = tempArr.length + " " + tempArr;
    return count;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(vowelsNum(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)