const burgerBtn = document.querySelector('.burger-btn')
const burgerMEnu = document.querySelector('.main-nav')
const closeBtn = document.querySelector('.close-btn')
const nav = document.querySelector('nav ul')
const navLi = document.querySelector('ul a')

const navLis = document.querySelectorAll("ul a")

burgerBtn.addEventListener('click', function(){
    burgerBtn.style.display = "none"
    nav.classList.add('nav-ul-active')
    burgerMEnu.classList.add('active')
    navLi.classList.add('ul-a-active')

    navLis.forEach(nLi => nLi.classList.add('ul-a-active'))
})

closeBtn.addEventListener('click', function () {
    burgerMEnu.classList.remove('active')
    nav.classList.remove('nav-ul-active')
    navLi.classList.remove('ul-a-active')
    burgerBtn.style.display = "block"

    navLis.forEach(nLi => nLi.classList.remove('ul-a-active'))
})