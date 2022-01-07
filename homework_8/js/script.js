var list = $('.list')

$(document).ready(function () {
    $('.sports').click(function () {
        list.toggleClass('move');
    })
});




var regButton = $('.EnterClub');

// regButton.attr('name', 'newforma');

// console.log(regButton.attr('name'));

regButton.click(function (e) {
    switch (confirm('Вы подтверждаете?')) {
        case true:
            regButton.text('Зарегистрирован');
            break;
        default:
            regButton.text('Отмена');
            function setTime() {
                regButton.html('вступить <br> в клуб')
            }
            setTimeout(setTime, 1000);
            e.preventDefault();

    }
})
