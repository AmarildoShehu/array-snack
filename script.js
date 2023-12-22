console.log('js OK')

// Al click di un bottone, tira un dado e mostra il risultato
//   Trucca il dado in modo che il numero 4 abbia il doppio di probabilità di uscire
/*const playbutton = document.querySelector('.playbtn');

const magicNumber = 4;

playbutton.addEventListener('click', gioca);

function gioca() {
    const playdado = Math.floor(Math.random() * 6) + 1;
    console.log('Il numero del dado è: ' + playdado);

}*/

/* 
Effettua un ciclo su tutti gli elementi di un array di numeri
se il numero è pari, stampalo in console
altrimenti stampa il numero successivo

const numbers = [3, 4, 67, 39, 2, 40, 45];
console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    const nextNumber = numbers[i +1];

    let numberToPrint;

    if(currentNumber % 2 === 0){
        numberToPrint= currentNumber;
    } else if(nextNumber){
        numberToPrint= currentNumber;
    }

    if(numberToPrint)console.log(numberToPrint);
}*/


/*Dato un array di numeri interi, effettua la somma di tutti i numeri
 IN POSIZIONE DISPARI (umana)
const numbers = [3, 4, 67, 39, 2, 40, 45];
const numbers = [3, 4, 67, 39, 2, 40, 45];
console.log(numbers);
let somma = 0;

for (let i = 0; i < numbers.length; i += 2) {
    somma += numbers[i];
    console.log(numbers[i]);
}
console.log(somma);
*/

/*
Pillola 1:
Chiedi all’utente un numero intero e memorizzalo nella costante numOfElements
Crea un array numbers e riempilo con i numeri interi da 1 a numOfElements
Stampa in console l’array numbers e il numero di elementi di cui si compone

const numOfElements = parseInt(prompt("Inserisci un numero intero:"));
console.log(numOfElements);

const numbers = [];

for (let i = 1; i <= numOfElements; i++) {
    numbers.push(i);
}

/*Variante:
for (let i = 0; i < numOfElements; i++) {
    numbrs[i] = i+1;*/

// console.log(numbers); 


/*Pillola 2: Calcola la somma di tutti i numeri presenti 
nell’array numbers dell’esercizio 1 */



const numOfElements = parseInt(prompt("Inserisci un numero intero:"));
console.log(numOfElements);

let numbers = [];

for (let i = 1; i <= numOfElements; i++) {
    numbers.push(i);
}

/*Variante:
for (let i = 0; i < numOfElements; i++) {
    numbrs[i] = i+1;*/

console.log(numbers); 


let somma = 0;
let massimoNum = numbers[0]

for (let i = 0; i < numbers.length; i ++) {
    somma += numbers[i];
    if (numbers[i] > massimoNum) {
        massimo = numbers[i];
     // Aggiorna il valore massimo se trovi un numero maggiore
    }
}
console.log('la somma E:', somma);

/*Pillola 3: Trova il valore massimo di tutti i numeri 
presenti nell’array numbers dell’esercizio 1.
P.S. l’array numbers viene costruito con numeri c
asuali (non necessariamente unici) (modificato) */


