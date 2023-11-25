import arrowNext from '../../assets/arrow-next.svg';
import arrowPrev from '../../assets/arrow-prev.svg';
import brackets from '../../assets/brackets.png';
import slidePhoto from '../../assets/slide-photo.svg';

const heroFrames =  [
    {
        comment: "“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable”.",
        author: "kayn Williamsom",
        job: "CEO, RT Team",
        brackets: brackets,
        slidePhoto: slidePhoto
    },
    {
        comment: "“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable”.",
        author: "kayn Williamsom",
        job: "CEO, RT Team",
        brackets: brackets,
        slidePhoto: slidePhoto
    },
    {
        comment: "“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable”.",
        author: "kayn Williamsom",
        job: "CEO, RT Team",
        brackets: brackets,
        slidePhoto: slidePhoto
    },
    {
        comment: "“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable”.",
        author: "kayn Williamsom",
        job: "CEO, RT Team",
        brackets: brackets,
        slidePhoto: slidePhoto
    }
]

import testimonialsSlideTpl from './testimonialsSlideTpl.hbs';
const heroSection = document.querySelector('.testimonials')
const heroContainer = document.querySelector('.testimonials .slides')
let slidesCounter = 0
let heroFramesLenght = heroFrames.length - 1

//Перетворення данних масива на HTML код
function renderTestimonialsSlides() {
    for (let heroFramesItem of heroFrames) {
        heroContainer.innerHTML += testimonialsSlideTpl(heroFramesItem)
    }
}
renderTestimonialsSlides()

// //Перемикач слайдів
heroSection.addEventListener('click', switchContainer)
function switchContainer(evt) {
    if (evt.target.id === 'prev') {
        if (slidesCounter !== 0) {
            const heroContainer = document.querySelector('.testimonials .slides')
            const slide = document.querySelector('.testimonials .slide')
            let slideWidth = slide.clientWidth
            heroContainer.style.transform += `translateX(${slideWidth}px)`
            slidesCounter -= 1
        }
    } else if (evt.target.id === 'next') {
        if (slidesCounter !== heroFramesLenght) {
            const heroContainer = document.querySelector('.testimonials .slides')
            const slide = document.querySelector('.testimonials .slide')
            let slideWidth = slide.clientWidth
            heroContainer.style.transform += `translateX(-${slideWidth}px)`
            slidesCounter += 1 
        }
    }
}