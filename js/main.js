const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://wise.com/imaginary/d2cc504d1f3de3b09dbe706534bb0dff.jpg',
        title: 'Norvegia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

const wrapperDom = document.querySelector('.wrapper');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');


for (let i = 0; i < images.length; i++){
    wrapperDom.innerHTML += `<div class="images">
                                <img src="${images[i].url}" class="img">
                                <h2 class='title'>${images[i].title}</h2>
                                <h3 class='description'>${images[i].description}</h3>
                            </div>`;
}

const image = document.querySelectorAll('.img');
const title = document.querySelectorAll('.title');
const description = document.querySelectorAll('.description');


let active = 0;
addShow();

const thumbnailsDom = document.querySelector('.thumbnails');

for (let c = 0; c < images.length; c++){
    let thumb = document.createElement('img');
    thumb.src = images[c].url;
    thumb.classList.add('thumbnails-img');
    thumb.addEventListener('click', 
        function () {
            removeShow();
            active = c;
            addShow();
            thumbImg[index].classList.remove('active');
            index = c;
            thumbImg[index].classList.add('active');
        }
    );
    thumbnailsDom.append(thumb);
}


const thumbImg = document.querySelectorAll('.thumbnails-img');
let index = 0;
thumbImg[index].classList.add('active');

next.addEventListener('click', getNextImage); //* IMMAGINE SUCCESSIVA

prev.addEventListener('click', getPrevImage); //* IMMAGINE PRECEDENTE



const startCarousel = document.getElementById('start-carousel');
const stopCarousel = document.getElementById('stop-carousel');
const reverseCarousel = document.getElementById('reverse-carousel');
let int;

startCarousel.addEventListener('click', 
    function () {
        clearInterval(int);
        int = setInterval(getNextImage, 5000);
    }
);

stopCarousel.addEventListener('click', 
    function () {
        clearInterval(int);
    }
);

reverseCarousel.addEventListener('click', 
    function () {
        clearInterval(int);
        int = setInterval(getPrevImage, 5000);
    }
);






// *****funzioni Invocate*****
function removeShow () {
    image[active].classList.remove('show');
    title[active].classList.remove('show');
    description[active].classList.remove('show');
}

function addShow () {
    image[active].classList.add ('show');
    title[active].classList.add('show');
    description[active].classList.add('show');
}

function getNextImage () {
    removeShow();
        thumbImg[index].classList.remove('active');
        active++;
        index++;
        if (active == images.length) { 
            active = 0;
        }
        if (index == images.length) { 
            index = 0;
        }
        addShow();
        thumbImg[index].classList.add('active');
}

function getPrevImage () {
    removeShow();
        thumbImg[index].classList.remove('active');
        active--;
        index--;
        if (active == images.length - 6) {
            active = 4;
        }
        if (index == images.length - 6) {
            index = 4;
        }
        addShow();
        thumbImg[index].classList.add('active');
}