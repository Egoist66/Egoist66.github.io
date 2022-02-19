var heart = document.querySelector('.heart');
var container = document.querySelector('.container');
var valentine = document.querySelector('.valentine');
var button__box = document.querySelector('.button__box');
var body = document.querySelector('.body');
var title = document.querySelector('h1');

document.addEventListener('DOMContentLoaded', function (){

        function time(){
            alert('Tap the Heart below');
        }

        button__box.classList.add('show');
        setTimeout(time, 3200);



    heart.addEventListener('click', (event) => {
        event.preventDefault();


      let person = {
        name: prompt('What is name of person you like?').trim(),
        lastName:  prompt('What is the last name of this one?').trim(),
      }

        if(person.name === 'Ksenia' && person.lastName === 'Uvarovskaya'){
            alert("Let's see if this girl can start the Heart");
            heart.classList.toggle('active');
            valentine.textContent = "It's beating";
            body.classList.add('active');
            title.textContent = 'It seems Ksenia is the One you need' + ' ' + '💞';


        }else {
            alert('You have made a big Mistake ever');
            body.classList.remove('active');
            title.textContent = 'You have chosen wrong Girl, so go Fuck yourself' + ' ' +  '😡';


        }

        console.log(person);




    })



})