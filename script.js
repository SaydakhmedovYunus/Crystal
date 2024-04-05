//Определить конец скидки Скидка закончивается 29 марта в 18:00
//Узнать текущую дату

let now = new Date();// Текущая дата
// console.log(now);
let finish = date = new Date(2024, 3, 29, 18, 0, 0, 0,);
// console.log(finish);
let delta = Math.trunc((finish - now) / 1000)
// console.log(delta)

function convertSecondsToDHMS(seconds) {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return { days, hours, minutes, seconds: remainingSeconds };
}
//Пример использования
const { days, hours, minutes, seconds } = convertSecondsToDHMS(delta);

let timerElems = document.querySelectorAll('.blocks .blocks_hours')
timerElems[0].innerHTML = twoDigitsNum(days)
timerElems[1].innerHTML = twoDigitsNum(hours)
timerElems[2].innerHTML = twoDigitsNum(minutes)
console.log(timerElems)
function twoDigitsNum(a) {
    if (a < 10) {
        return `0${a}`
    } else {
        return a
    }
}

//PopUp Start
let whiteBtn = document.getElementsByClassName("white_button")[0];
let popUpWrapper = document.querySelector(".popUpForm");
let closeBtn = document.querySelector(".close");
whiteBtn.addEventListener("click", popUpForm);
closeBtn.addEventListener("click", closePopUp);
function popUpForm () {
    console.log("Я работаю");
    popUpWrapper.style.display="flex";
}   
function closePopUp() {
    popUpWrapper.style.display = "none";
}
//PopUp End