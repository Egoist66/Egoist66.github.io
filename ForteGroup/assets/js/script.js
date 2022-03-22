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





// sticky header

let header_box = document.querySelector('.header-box');
let header = document.querySelector('.header');


window.addEventListener('scroll', (event) => {

    event.preventDefault();

    if (scrollY > 0) {
        header.classList.add('sticky');

    } else {
        header.classList.remove('sticky');


    }

    console.log(window.pageYOffset);

})


// active burger and menu

let mobile_menu = document.querySelector('.mobile-menu');
let mobile_navigation = document.querySelector('.header-navigation__list');
mobile_menu.insertAdjacentHTML('afterbegin', `

    <ul class="mobile-navigation__list">

    <li>
        <a href="#" class="mobile-navigation__list-links">Are we a fit?</a>
    </li>
    <li>
        <a href="#" class="mobile-navigation__list-links">Technology expertise </a>
    </li>
    <li>
        <a href="#" class="mobile-navigation__list-links">Insights </a>
    </li>
    <li>
        <a href="#" class="mobile-navigation__list-links"> Our work</a>
    </li>
    <li>
        <a href="#" class="mobile-navigation__list-links">About us</a>
    </li>
    <li>
        <a href="#" class="mobile-navigation__list-links ">Careers</a>
    </li>

    <li> <button class="header-navigation__list-button">Get Started</button></li>

    </ul>`
)
console.log(mobile_menu);


function activeBurger() {
    this.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    mobile_navigation.classList.toggle('active');


    if (mobile_menu.classList.contains('active')) {
        document.documentElement.style.overflow = 'hidden';
    } else {
        document.documentElement.style.overflow = 'auto';
    }
}



menu_burger.addEventListener('click', activeBurger);













//*************
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

// $(window).scroll(function () {
//     if ($(this).scrollTop() > 0) {
//         $('.header-box').addClass('sticky');
//         $('.header').css('margin-bottom', '0px');
//     } else {
//         $('.header-box').removeClass('sticky');
//         $('.header').css('margin-bottom', '151px')
//     }
// });

