let checkbox = document.querySelector('#checkbox');
let agreementBlock = document.querySelector('.agreement-block');
let links = document.getElementsByTagName('a');
let submit = document.querySelector('.submit_button');
let inputs = document.querySelectorAll('input');
let label = document.querySelector('.agreement_label');



let warntext = document.createElement('p');
warntext.className = 'warn_text';
warntext.textContent = 'Accept an agreement';


agreementBlock.append(warntext);

if (checkbox.checked == true) {
    console.log('checked');
    warntext.style.visibility = 'hidden';


}

checkbox.addEventListener('change', () => {

    if (checkbox.checked == true) {
        console.log('checked');
        warntext.style.visibility = 'hidden';


    } else {

        console.log('unchecked');
        warntext.style.visibility = 'visible';

    }
});


let menu_burger = document.createElement('div');
let menu_img = document.createElement('img');
let navigation = document.querySelector('.header-navigation');

menu_burger.classList.add('menu-burger');
menu_img.classList.add('menu-burger_img');
menu_img.src = 'assets/images/burger.svg';



menu_burger.append(menu_img);
navigation.append(menu_burger);









// Jquery Module

let isShownBtn = $('.isShownBtn')
let map_frame = $('.map_frame ');

isShownBtn.on("click", "a", function (e) {
    e.preventDefault();
    let link = $(this).attr("href")
        , linkTop = $(link).offset().top;
    $("html, body").animate({
        scrollTop: linkTop
    });
});

$(window).scroll(function () {
    // console.log($(window).scrollTop());
    $(window).scrollTop() > 600 ? isShownBtn.addClass("isShownBtn_hide") : isShownBtn.removeClass("isShownBtn_hide");

});

// map_frame.hover(function () {
//     map_frame.toggleClass('active');
// });
