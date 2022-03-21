var heart = document.querySelector('.heart');
var container = document.querySelector('.container');
var valentine = document.querySelector('.valentine');
var button__box = document.querySelector('.button__box');
var body = document.querySelector('.body');
var title = document.querySelector('h1');

document.addEventListener('DOMContentLoaded', function () {

    function time() {
        alert('Нажми на сердце ниже');
    }

    button__box.classList.add('show');
    setTimeout(time, 3200);



    heart.addEventListener('click', (event) => {
        event.preventDefault();


        let person = {
            name: prompt('Имя человека которого ты любишь?').trim(),
            lastName: prompt('Фамилия этого человека?').trim(),
        }

        if (person.name === 'Настя' && person.lastName === 'Наумик') {
            alert("Давай посмотрим - сможет ли она завести сердце");
            heart.classList.toggle('active');
            body.classList.add('active');
            title.textContent = 'Похоже что Настя тот человек который нужен' + ' ' + '💞';


        } else {
            alert('Ты сделал самую большую ошибку');
            body.classList.remove('active');
            title.textContent = 'Ты выбрал не ту девушку фак ю Бич!' + ' ' + '😡';


        }

        console.log(person);




    })



})