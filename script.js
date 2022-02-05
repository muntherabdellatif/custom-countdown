const inputContainer = document.getElementById('input-container');
const countDownForm = document.getElementById('countDown-form');
const dataPicker = document.getElementById('data-picker');

let countdownTitle = "";
let countdownDate = "" ;

// set date input min to todays date 
const today = new Date().toISOString().split('T')[0];
dataPicker.setAttribute('min',today);

function updateCountdown(event) {
    event.preventDefault();
    [titleElement,dateElement]=event.srcElement;
    countdownTitle = titleElement.value ;
    countdownDate = dateElement.value ;
    console.log(countdownTitle);
    console.log(countdownDate);
}

// event listener

countDownForm.addEventListener('submit',updateCountdown);