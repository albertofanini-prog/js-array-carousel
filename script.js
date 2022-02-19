//Inserire in un array gli elementi da riprodurre

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];
  
const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]
  
const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]
  
//Dichiarare dove inserire gli elementi
const imgSmall = document.querySelector('div.img_small');
const imgFull = document.querySelector('div.img_full');
  
let selected = 3;
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
    