// var infoButton = document.querySelector('.infoButton');
// var getinfoButton = document.querySelector('.getinfoButton');
// var showinfoButton = document.querySelector('.showinfoButton');
// var removeinfoButton = document.querySelector('.removeinfoButton');


var ButtonObjects = {

    infoButton: document.querySelector('.infoButton'),
    getinfoButton: document.querySelector('.getinfoButton'),
    showinfoButton: document.querySelector('.showinfoButton'),
    removeinfoButton: document.querySelector('.removeinfoButton'),
    disabled: document.querySelectorAll('.disabled'),

}

var ButtonArr =
    [ButtonObjects.getinfoButton, ButtonObjects.showinfoButton, ButtonObjects.removeinfoButton];

// формирующийся Объект (Хэш)

var Countries = {};


ButtonObjects.infoButton.addEventListener('click', function () {

    var CountryName = prompt('Введите название страны');
    var CountryCapital = prompt('Введите название столицы');
    Countries[CountryName] = CountryCapital;

    if (Countries[CountryName] == '') {
        alert('Вы ничего не заполнили');
        for (let i = 0; i < ButtonArr.length; i++) {
            ButtonArr[i].setAttribute('disabled', true);
            ButtonArr[i].style.border = '1px solid red';
        }

    } else {
        console.log(Countries);
        for (let i = 0; i < ButtonArr.length; i++) {
            ButtonArr[i].removeAttribute('disabled');
            ButtonArr[i].style.border = 'transparent';
        }
    }





});

ButtonObjects.getinfoButton.addEventListener('click', function () {
    var CountryName = prompt('Введите название страны');



    if (CountryName in Countries) {
        alert('Столица' + ' ' + Countries[CountryName]);

    } else {
        alert('Информация об этой стране отсутствует');
    }

    switch (Countries) {
        case Object.keys(Countries).length == 0 || '':
            alert('Пусто');
            break;
    }


})


ButtonObjects.showinfoButton.addEventListener('click', function () {
    if (Object.keys(Countries).length == 0) {
        alert('Нет данных');
    } else {
        alert('Перечень всех стран' + ' ' + JSON.stringify(Countries));
    }
});

function removeData() {

    Countries = {};

    if (Object.keys(Countries).length == 0) {
        alert('Данные удалены');
    } else {
        alert('Ошибка');
    }

}

ButtonObjects.removeinfoButton.addEventListener('click', function () {
    removeData();
    console.log(Countries);
})

