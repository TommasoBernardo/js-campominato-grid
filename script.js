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

