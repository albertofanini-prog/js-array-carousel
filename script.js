//Inserire in un array gli elementi da riprodurre

const items = [
    'img/NY.jpg',
    'img/RM.jpg',
    'img/RJ.jpg',
    'img/SH.jpg',
    'img/LN.jpg'
];
  
const title = [
    'New York',
    'Roma',
    'Rio de Janeiro',
    'Shangai',
    'Londra'
]
  
const text = [
    'New York è una città degli Stati Uniti d\'America situata nello stato federato di New York. Si estende su una superficie di 1200 kmq ed è di circa 8.7 milioni di abitanti per una densità di popolazione di circa 6.9 mila abitanti per chilometro quadro.',
    'Roma, capitale d\'Italia, è considerata una delle più belle città del mondo. Il suo centro storico, insieme alle proprietà extraterritoriali della Santa Sede dentro la città e alla Basilica di San Paolo Fuori le Mura, è tra i 58 siti italiani inseriti dall\'Unesco nella World Heritage List.',
    'Natura esuberante, cultura viva e variegata, abitanti calorosi e ospitali, tanta storia e un\infinità di contrasti: sono queste le ragioni che fanno di Rio de Janeiro quell\'icona celebre in tutto il mondo e, senza ombra di dubbio, la città latinoamericana più interessante da visitare.',
    'Shanghai è la città più popolata della Cina e la terza a livello mondiale. Considerata la capitale economica del Paese, grazie allo sviluppo degli ultimi due decenni, è un centro economico, finanziario, commerciale e delle comunicazioni di primaria importanza mondiale.',
    'La città è situata nella zona meridionale della Gran Bretagna. Londra è una città di importanza mondiale dal punto di vista culturale, economico, finanziario. E\' la terza piazza borsistica del mondo. Londra è anche una città che detta le principali influenze in campo culturale,politico ,economico ed artistico.',
]
  
//Dichiarare dove inserire gli elementi
const imgSmall = document.querySelector('div.img_small');
const imgFull = document.querySelector('div.img_full');
  
let selected = 0;
imgFull.innerHTML = `<img src="${items[selected]}">`
  
//Creare ciclo per inserire gli elementi
for ( i = 0; i < items.length; i++ ){
    const scrollImg = `
        <div class="scrolling-image">
             <img src="${items[i]}">
        </div>
    `
    //Inserire in HTML
    imgSmall.innerHTML += scrollImg
}
  
//Lavorare su wrapper di destra
const scrollWrapper = [...document.getElementsByClassName('scrolling-image')];
scrollWrapper[selected].classList.add('active');
  
//Inserire elementi della descrizione
const description = document.querySelector('div.description');
  
let imgTitle = title[selected];
let imgText = text[selected];
  
description.innerHTML = `
<h2>${imgTitle}</h2>
<p>${imgText}</p>
`; 
  
//Animare button slide precedente 
const next = document.querySelector('.next')
next.addEventListener('click', function(){
    scrollWrapper[selected].classList.remove('active');
    if (selected < items.length -1){
        selected++
    }
    scrollWrapper[selected].classList.add('active');  
    imgFull.innerHTML = `<img src="${items[selected]}">`
  
    imgTitle = title[selected];
    imgText = text[selected];
    
    description.innerHTML = `
    <h2>${imgTitle}</h2>
    <p>${imgText}</p>
    `; 
})
  
//Annimare button slide successiva
const prev = document.querySelector('.prev');
  
prev.addEventListener('click', function(){
    scrollWrapper[selected].classList.remove('active');
    if (selected > 0){
        selected--
    } 
    scrollWrapper[selected].classList.add('active');   
    imgFull.innerHTML = `<img src="${items[selected]}">`
  
    imgTitle = title[selected];
    imgText = text[selected];
  
    description.innerHTML = `
    <h2>${imgTitle}</h2>
    <p>${imgText}</p>
    `; 
})
    