const options = {
    rootMargine: '100px',
    threshold: 0.5,
}
console.log('sadfasdf');
const cards = document.querySelectorAll('.intersect')
function showImages() { 
    const cards = document.querySelectorAll('.intersect')
    const io = new IntersectionObserver((entries,observer)=>{
        entries.forEach((entry)=> {
            if(entry.isIntersecting) {
                const card = entry.target
                console.log(card);
                card.classList.add('show')
                const cardIntersectionRatio = (entry.intersectionRatio * 100) - 100
                card.style.transform = `translateY(-${cardIntersectionRatio}%)`
                observer.unobserve(card)
            } 
        })
    })

    cards.forEach(card=>io.observe(card))
}
window.addEventListener('scroll', ()=> {
    showImages()
})