/* 

Consegna:
Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
Creare un carosello come nella foto allegata.

Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.


Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, la nuova immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.


BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.

BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva in automatico.

BONUS 3:
Aggiungere bottoni di start / stop e di inversione del meccanismo di autoplay.


// Array di riferimento:   
        const images = [
            {
                image: 'img/01.webp',
                title: 'Marvel\'s Spiderman Miles Morale',
                text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
            }, {
                image: 'img/02.webp',
                title: 'Ratchet & Clank: Rift Apart',
                text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
            }, {
                image: 'img/03.webp',
                title: 'Fortnite',
                text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
            }, {
                image: 'img/04.webp',
                title: 'Stray',
                text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
            }, {
                image: 'img/05.webp',
                title: "Marvel's Avengers",
                text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
            }
        ];
*/

// Creare un carosello come nella foto allegata.
 const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
console.log(images);
 
//bersaglio lo slider

const sliderElement = document.getElementById("slider");
console.log(sliderElement);

// tramite un ciclo for prendiamo ogni indirizzo delle immagini dall'array
images.forEach(function(currentImage){
    
   // sliderElement.innerHTML += `<img src="./img/0${i + 1}.webp" alt="immagine ${i + 1}">` 
    sliderElement.innerHTML += 
   ` <section class="slide">
                    <img src="./${currentImage.image}" alt="">

                    <div class="details">
                        <h3 class="title">
                           ${currentImage.title};
                        </h3>
                        <div class="text">
                          ${currentImage.text};
                        </div>
                    </div>
    </section> `
    // per ognuno di essi andremo a creare un elemento img dentro lo slider

});
// devo dare la classe active a quelle che voglio visualizzare
document.querySelector(".slide:nth-of-type(1)").classList.add("active");

// devo inizilizzare poi un contatore
//per poter cambiare la classe active e quidni visualizzare altre immagini
//tutio ciò al click delle frecce
//   - prendo l'immagine attuale e le rimuovo la classe "active"  
//   - aumento il contatore di 1
//   - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"

// memorizzo la variabile del conttore
let slideNumber = 1; //uguale alla prima immagine

//al click

//funzione freccia sinistra
document.querySelector("#left-arrow").addEventListener("click", function(){

    if(slideNumber < images.length){
        // - prendo l'immagine attuale e le rimuovo la classe "active"  

        document.querySelector(`#slider .slide:nth-of-type(${slideNumber})`).classList.remove("active");

        // - aumento il contatore di 1
        slideNumber++;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider .slide:nth-of-type(${slideNumber})`).classList.add("active");

        console.log(slideNumber);

    } else {

        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`#slider .slide:nth-of-type(${slideNumber})`).classList.remove("active");

        // resetto la variabile che mi conta l'immagine a cui sono arrivato
        slideNumber = 1;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider .slide:nth-of-type(${slideNumber})`).classList.add("active");

    }
    

});

//funzione freccia destra
//copio e incollo quella di sinistra e cambio direzione
document.querySelector("#right-arrow").addEventListener("click", function(){

    if(slideNumber > 1 ){
        // - prendo l'immagine attuale e le rimuovo la classe "active"  

        document.querySelector(`#slider .slide:nth-of-type(${slideNumber})`).classList.remove("active");

        // - diminuisco il contatore di 1
        slideNumber--;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider .slide:nth-of-type(${slideNumber})`).classList.add("active");

        console.log(slideNumber);

    } else {

        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`#slider .slide:nth-of-type(${slideNumber})`).classList.remove("active");

        // - metto il valore di slideNumebr = alla posizione dell'ultima immagine
        slideNumber = images.length;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider .slide:nth-of-type(${slideNumber})`).classList.add("active");

    }
    

}); 

