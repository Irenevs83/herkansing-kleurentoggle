const clearButton = document.getElementById('colorBTTN');
const clearMenu = document.getElementById('colormenu');
const BDYColor = document.getElementById('BodyColor');
const menuToggle = document.querySelector('.colormenuToggle')
const homeBttn = document.querySelector('.ColorHome');
const redBttn = document.querySelector('.ColorRed');
const blueBttn = document.querySelector('.ColorBlue');
const greenBttn = document.querySelector('.ColorGreen');
const yellowBttn = document.querySelector('.ColorYellow');
const purpleBttn = document.querySelector('.ColorPurple');
const navigationBar = document.getElementById('Navigation-bar')


const ToggleMenu = function () {
    navigationBar.classList.toggle('colormenuToggle');
}
clearButton.addEventListener('click', ToggleMenu);

const turnHome = function () {
    BDYColor.classList.add('ColorHome');
    BDYColor.classList.remove('ColorRed');
    BDYColor.classList.remove('ColorBlue');
    BDYColor.classList.remove('ColorGreen');
    BDYColor.classList.remove('ColorYellow');
    BDYColor.classList.remove('ColorPurple');
}
homeBttn.addEventListener('click', turnHome);
homeBttn.addEventListener('click', ToggleMenu);

const turnRed = function () {
    BDYColor.classList.remove('ColorHome');
    BDYColor.classList.add('ColorRed');
    BDYColor.classList.remove('ColorBlue');
    BDYColor.classList.remove('ColorGreen');
    BDYColor.classList.remove('ColorYellow');
    BDYColor.classList.remove('ColorPurple');
}
redBttn.addEventListener('click', turnRed);
redBttn.addEventListener('click', ToggleMenu);

const turnBlue = function () {
    BDYColor.classList.remove('ColorHome');
    BDYColor.classList.remove('ColorRed');
    BDYColor.classList.add('ColorBlue');
    BDYColor.classList.remove('ColorGreen');
    BDYColor.classList.remove('ColorYellow');
    BDYColor.classList.remove('ColorPurple');
}
blueBttn.addEventListener('click', turnBlue);
blueBttn.addEventListener('click', ToggleMenu);

const turnGreen = function () {
    BDYColor.classList.remove('ColorHome');
    BDYColor.classList.remove('ColorRed');
    BDYColor.classList.remove('ColorBlue');
    BDYColor.classList.add('ColorGreen');
    BDYColor.classList.remove('ColorYellow');
    BDYColor.classList.remove('ColorPurple');
}
greenBttn.addEventListener('click', turnGreen);
greenBttn.addEventListener('click', ToggleMenu);

const turnYellow = function () {
    BDYColor.classList.remove('ColorHome');
    BDYColor.classList.remove('ColorRed');
    BDYColor.classList.remove('ColorBlue');
    BDYColor.classList.remove('ColorGreen');
    BDYColor.classList.add('ColorYellow');
    BDYColor.classList.remove('ColorPurple');
}
yellowBttn.addEventListener('click', turnYellow);
yellowBttn.addEventListener('click', ToggleMenu);

const turnPurple = function () {
    BDYColor.classList.remove('ColorHome');
    BDYColor.classList.remove('ColorRed');
    BDYColor.classList.remove('ColorBlue');
    BDYColor.classList.remove('ColorGreen');
    BDYColor.classList.remove('ColorYellow');
    BDYColor.classList.add('ColorPurple');
}
purpleBttn.addEventListener('click', turnPurple);
purpleBttn.addEventListener('click', ToggleMenu);
