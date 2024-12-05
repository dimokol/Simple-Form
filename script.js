const form = document.getElementById('form');
const number = document.getElementById('number');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const numberValue = number.value.trim();

    if(numberValue === '') {
        console.log('User entered nothing');
        setErrorFor(number, 'Please enter a number');
    } else if (!(numberValue > 10)) {
        console.log('User entered number smaller than 10 (' + numberValue + ')');
        setErrorFor(number, 'Number must be greater than 10');
    } else {
        console.log('User entered a valid number (' + numberValue + ')');
        setSuccessFor(number);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;
    formControl.className = 'formBody error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'formBody success';
}