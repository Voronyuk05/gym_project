import heroTpl from './heroTpl.hbs'
import blackShoes from '../../assets/product-image.png'
import redShoes from '../../assets/red-shoes.png'
import blueShoes from '../../assets/blue-shoes.png'
import packageImg from '../../assets/icon-shopping-bag-2-x.png'

const shoesData = [
    {
        img: blackShoes,
        name: "AIR JORDAN 1 RETRO HIGH OG",
        price: "$275",
        color: 'dark',
        package: packageImg
    },
    {
        img: redShoes,
        name: "NIKE SB Dunk High",
        price: "$250",
        color: 'red',
        package: packageImg
    },
    {
        img: blueShoes,
        name: "Nike Dynamo GO SE",
        price: "$300",
        color: 'blue',
        package: packageImg
    }
]



const circusEl = document.querySelector('.circus')
const contentEl = document.querySelector('.content')
circusEl.addEventListener('click', renderShoes)


function renderShoes(event) {
    for (shoesItem of shoesData) {
        if (event.target.classList.contains(shoesItem.color)) {
            contentEl.innerHTML = heroTpl(shoesItem)
        }
    }
}