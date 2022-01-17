var checkbox = document.getElementById('check');
var label = document.querySelector('label');
var body = document.querySelector('.body');
checkbox.setAttribute('title', 'click me');
checkbox.addEventListener('change', function (event) {
    event.preventDefault();
    if (checkbox.checked == true) {
        console.log('checked');
        body.classList.add('active');
    } else {
        console.log('unchecked');
        body.classList.remove('active');
    }
})

