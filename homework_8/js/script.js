var list = $('.list')

$(document).ready(function () {
    $('.sports').click(function () {
        list.toggleClass('move');
    })
});