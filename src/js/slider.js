import slideTpl from './slidesTpl.hbs'
import orangeShoes from '../../assets/orange-shoes.png'
import redShoes from '../../assets/red-shoes.png'
import blueShoes from '../../assets/blue-shoes.png'

const slidesData = [
    {
        slideImg: orangeShoes,
        slideName: "NIKE COSMIC UNITY 2"
    },
    {
        slideImg: redShoes,
        slideName: "NIKE SB Dunk High"
    },
    {
        slideImg: blueShoes,
        slideName: "Nike Dynamo GO SE"
    },
    {
        slideImg: orangeShoes,
        slideName: "NIKE COSMIC UNITY 2"
    },
    {
        slideImg: redShoes,
        slideName: "NIKE SB Dunk High"
    },
    {
        slideImg: blueShoes,
        slideName: "Nike Dynamo GO SE"
    }
]

const slides = document.querySelector('.slides-container .slides')
const prevBtn = document.querySelector('.switcher div#prev')
const nextBtn = document.querySelector('.switcher div#next')

function renderSlides() {
    for (let slideDataItem of slidesData) {
        slides.innerHTML += slideTpl(slideDataItem)
    }
}

renderSlides()



prevBtn.addEventListener('click', switchCard)
nextBtn.addEventListener('click', switchCard)
let switchTo = 1
function switchCard(event) {
    console.log(switchTo);
    const cards = document.querySelectorAll('.slides-container .slides .slide-card')
    const slidesWidth = slides.clientWidth
    const switchMax = cards.length - 3
    if (event.target.id === 'next' && switchTo !== switchMax) {
        switchTo += 1
        const cardWidth = cards[switchTo/1].clientWidth
        console.log(slidesWidth * 0.05);
        slides.style.transform += `translateX(-${cardWidth + (slidesWidth *0.05)}px)`
    }
    if (event.target.id === 'prev' && switchTo !== 1) {
        switchTo -= 1
        const cardWidth = cards[switchTo/1].clientWidth
        slides.style.transform += `translateX(${cardWidth + (slidesWidth *0.05)}px)`
    }
}