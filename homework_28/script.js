var sidebar__list = $('.sidebar__list');
var sportType = $('h2');

sportType.click(function (e) {
    e.preventDefault();

    sidebar__list.slideToggle(500);

})