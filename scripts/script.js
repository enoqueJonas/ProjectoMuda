const closeMenuBtn = document.querySelector('.close-btn');
const burgerMenuBtn = document.querySelector('.burger-menu')
const navMenu = document.querySelector('.nav-menu')

function toggleMenu() {
    navMenu.classList.toggle('active');
}

closeMenuBtn.addEventListener('click', toggleMenu);
burgerMenuBtn.addEventListener('click', toggleMenu);