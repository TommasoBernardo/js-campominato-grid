/*
Consegna:
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della 
cella cliccata.
*/

const newGameButton = document.querySelector('a.btn');

newGameButton.addEventListener('click', function handler(){
   // § 1 - recupero il parent
    const gridContainer = document.querySelector('div.grid');
   // console.log(gridContainer);

   // § 1.1 - svuoto il parent se voglio che i click successivi generino una nuova partita
    gridContainer.innerHTML = "";

   // § 1.5 per ogni elemento dei 100 che voglio creare
    for (let  i = 1 ; i <= 100 ; i++){

        const newSquare = getMeANewSquare();
        newSquare.innerHTML = `<span class="fs-4 m-auto"> ${i} </span>`;

      // § 4 - aggiungo il div al parent
        gridContainer.appendChild(newSquare);
    }

   // this.removeEventListener('click', handler);
});


// funzione per creare un quadrato
function getMeANewSquare(){
   // § 2 - creo il div
    const newSquare = document.createElement('div');

   // § 3 - gli attribuisco le proprietà che voglio
    newSquare.classList.add('square', 'd-flex');

   // ? 3.1 - tra le quali un comportamento sul click
    newSquare.addEventListener("click", function(){
        newSquare.classList.toggle('clicked');
    });

    return newSquare;
}

const startingList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 624, 12412,412124, 124, 24124, 12124, 4122412, 4124];
/**
 *
 * Data una lista di 20 numeri diversi.
 * generiamo una lista secondaria di
 * 10 numeri presi randomicamente dalla lista, diversi tra loro.
 *
 */

const finalList = [];

// // § 1 - scorriamo la lista per dieci volte
// for (let i = 0 ; i < 10 ; i++){
//    // § 2 - genera un numero randomico, che vada da 0 alla lunghezza della lista startingList
//    const randomIndex = getRandomNumber(0, startingList.length - 1);

//    // § 3 - se l'elemento al posto randomIndex nella lista startingList non è già stato selezionato
//    if (!finalList.includes(startingList[randomIndex])){
//       // § 4a - Allora lo aggiungo alla nuova lista
//       finalList.push(startingList[randomIndex]);
//    }
//    // § 4b - altrimenti vado avanti con la ricerca
// }

// ? 1 - finché la nuova lista non ha 10 elementi
while(finalList.length < 10){

   // ? 2 - genera un numero randomico (che sarà il mio indice), che vada da 0 alla lunghezza della lista startingList
        const randomIndex = getRandomNumber(0, startingList.length - 1);
        const randomElement = startingList[randomIndex];

   // ? 3 - se l'elemento al posto randomIndex nella lista startingList non è già stato selezionato
    if (!finalList.includes(randomElement)){
      // ? 4a - Allora lo aggiungo alla nuova lista
        finalList.push(randomElement);
   }  // ? 4b - altrimenti vado avanti con la ricerca
}


console.log(finalList);

function getRandomNumber(numMin, numMax){
    if (numMin === numMax){
        return numMax;
    }

   return Math.floor( Math.random() * (numMax - numMin + 1) + numMin );
}


function getRandomUniqueNumber(blackList, min, max){
    let isValid = false;
    let randomNum;

   //  # finché non trovo un numero valido
    while ( isValid === false) {
      // # genero un nuovo numero randomico nell'intervallo richiesto
        randomNum = getRandomNumber(min, max);

      // # se non è un doppione
        if (!blackList.includes(randomNum)){
         // # ho trovato un nuovo numero randomico nella lista
            isValid = true;
        } 
    }
   // # e lo restituisco
    return randomNum;
}