var inputs = document.querySelectorAll('input');
var reset = document.querySelector('.reset');



for (i = 0; i < inputs.length; i++) {
    inputs[i].readOnly = "readonly";
}



inputs.forEach(input => {
    input.addEventListener('click', function () {


        if (input.id == 'sex') {
            var sexquery = prompt('Укажите ваш пол');
            var sexconfirm = confirm('Вы подтверждаете?');
            switch (sexconfirm) {
                case true:
                    input.value = 'Ваш пол' + ' ' + sexquery;
                    break;

                default: console.log('Отмена');

            }

        } else if (input.id == 'name') {
            var name = prompt('Ваше имя? (полное)');
            input.value = 'Вас зовут' + ' ' + name;
        } else if (input.id == 'age') {
            var age = parseInt(prompt('Ваш возраст?'));
            input.value = 'Ваш возраст' + ' ' + age;
        } else if (input.id == 'days_age') {
            var days_age = parseInt(prompt('Ваш возраст в днях?'));
            input.value = 'Ваш возраст в днях' + ' ' + days_age;
        } else if (input.id == 'future_age') {
            var future_age = parseInt(prompt('Через 5 лет вам будет?'));
            input.value = 'Вам будет через 5 лет' + ' ' + future_age;
        } else if (input.id == 'is_pensioner') {
            var is_pensioner = confirm('Вы на пенсии?');
            var confirmAge = parseInt(prompt('Подтвердите ваш возраст'));

            (is_pensioner == true && confirmAge >= 58) ? input.value = 'Вы пенсионер' : input.value = 'Вы не пенсионер';

        } else {
            alert('Ошибка');
        }


        input.disabled = true;
        input.classList.add('disabled');



        var personData = {

            Name: name,
            age: age,
            Sex: sexquery,
            ageInDays: days_age,
            futureAge: future_age,
            isPensioner: is_pensioner,

        }
        console.log(typeof (personData.age));


    })
})


reset.addEventListener('click', function () {


    for (i = 0; i < inputs.length; i++) {
        inputs[i].value = ''


        if (inputs[i].value == '') {
            inputs[i].disabled = false;
            inputs[i].classList.remove('disabled');

            return;
        }
    }
})


// inputs.forEach(input => {
//     input.addEventListener('change', function (event) {
//         if (input.id == 'sex') {
//             var sex = input.value;
//             console.log('Ваш пол - ' + ' ' + sex);
//             return;
//         }

//         if (input.id == 'name') {
//             var sex = input.value;
//             console.log(sex);
//             return;
//         }


//     })
// })
