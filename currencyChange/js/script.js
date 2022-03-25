let getData = document.querySelector('.getdata');
let reset_btn = document.querySelector('#reset');




function getActualRate() {



    let input_1 = document.querySelector('.sum').value;
    let input_2 = document.querySelector('.rate').value;


    let out = document.querySelector('.out-rate');


    if (input_1 === '' || input_2 === '') {
        alert('Empty values: Error!');

    } else {
        return out.innerHTML += `<p class="out-text">The actual exhange rate is ${parseInt(input_1) * parseInt(input_2)}BY</p>`
    }

}


function resetData() {

    let out_text = document.querySelectorAll('.out-text');

    let input_1 = document.querySelector('.sum').value;
    let input_2 = document.querySelector('.rate').value;


    if (input_1 === '' && input_2 === '') {
        alert('Nothing to clean')
    } else {
        out_text.innerHTML = '';
        out_text.forEach(text => {
            text.classList.add('off');
        });
        input_1 = '';
        input_2 = '';
    }


}



getData.addEventListener('click', getActualRate);
reset_btn.addEventListener('click', resetData);

