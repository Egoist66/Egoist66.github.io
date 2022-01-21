
var section__bg = $('.third__section-bg');


var elemArr = [$('#minusblock-title'), $('#plusblock-title')];


var hiddenContent1 = $('.hiddenContent1');
var hiddenContent2 = $('.hiddenContent2');
var links = document.querySelectorAll('.header__topnavigationlist-links');

links.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
    })
})





elemArr[0].click(function (event) {
    event.preventDefault();
    elemArr[0].toggleClass('active');
    hiddenContent1.slideToggle(400);

})

elemArr[1].click(function (event) {
    event.preventDefault();
    elemArr[1].toggleClass('active');
    hiddenContent2.slideToggle(400);

})




$(document).ready(function () {
    section__bg.toggleClass('active');
});