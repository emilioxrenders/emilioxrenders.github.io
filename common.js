let toggle = document.querySelector('.toggle');
let nav = document.querySelector('#mobile-nav')


// MOBILE MENU
toggle.addEventListener('click', function () {
    if (this.classList.contains('open')) {
        this.classList.remove('open');
        nav.classList.remove('open');
    } else {
        this.classList.add('open');
        nav.classList.add('open');
    }
});