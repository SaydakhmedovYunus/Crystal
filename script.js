//Определить конец скидки Скидка закончивается 29 марта в 18:00
//Узнать текущую дату

let now = new Date();// Текущая дата
// console.log(now);
let finish = date = new Date(2024, 4, 29, 18, 0, 0, 0,);
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


//PopUp Start2
let purpleBtn = document.getElementsByClassName('purple_button')[0];
let popUpWrapper2 = document.querySelector(".popUpForm2");
let closeBtn2 = document.querySelector(".close2");
purpleBtn.addEventListener("click", popUpForm2);
closeBtn2.addEventListener("click", closePopUp2)
function popUpForm2() {
    console.log("Я тоже работаю");
    popUpWrapper2.style.display="flex";
}
function closePopUp2() {
    popUpWrapper2.style.display = "none";
}
//PopUp End2