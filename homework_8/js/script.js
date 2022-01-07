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
            alert('Вы зарегистрированы');
            break;
        default:
            alert('Отмена регистрации');
            e.preventDefault();

    }
})
