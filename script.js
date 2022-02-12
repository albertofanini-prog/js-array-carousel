
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

// //Creare variabili per i div
// let previewBox = document.querySelector('.slider_preview');

const sliderMain = document.querySelector('.slider_main');
const sliderPreview = document.querySelector('.slider_preview');


//Definire il punto di partenza
let currentIndex = 0;

//Creare il ciclo per l'immagine principale
for(let i = 0; i < items.length; i++){
    const mainBox = document.createElement('div');
    const mainPic = `<img src="${items[i]}">`;
    const divSliderMain = `<div class="slider_item"><h3>${title[i]}</h3><p>${text[i]}</p></div>`;
    // const divSliderPreview = ;
    mainBox.classList.add("list-item" + i)
    mainBox.innerHTML += mainPic + divSliderMain;
    sliderMain.append(mainBox);


    if(i === currentIndex){
        mainBox.classList.add('active');
    }


}