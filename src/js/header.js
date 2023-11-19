const burger = document.querySelector('.burger');

const nav = document.querySelector('.navigation');
const header = document.querySelector('.container')
burger.addEventListener("click", function (e) {
	document.body.classList.toggle('_lock')
	burger.classList.toggle('_active')
	nav.classList.toggle('_active')
	header.classList.toggle('_menu-backgraund')

})
