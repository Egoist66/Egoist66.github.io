var list = document.querySelector('.sidebar__list');
var sportType = document.querySelector('h2');

sportType.setAttribute('title', 'показать список');

sportType.addEventListener('click', function (event) {
    event.preventDefault();
    list.classList.toggle('active');
})