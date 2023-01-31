const buttonPlay = document.querySelector(".play");
const buttonStop = document.querySelector(".stop");
const buttonMais = document.querySelector(".mais");
const buttonMenos = document.querySelector(".menos");

const buttonFlorestOn = document.querySelector(".forest_sound_on");
const buttonFlorestOff = document.querySelector(".forest_sound_off");
const buttonRainOn = document.querySelector(".rain_sound_on");
const buttonRainOff = document.querySelector(".rain_sound_off");

const buttonCoffeeON = document.querySelector(".coffee_sound_on");
const buttonCoffeeOff = document.querySelector(".coffee_sound_off");
const buttonFireOn = document.querySelector(".fire_sound_on");
const buttonFireOff = document.querySelector(".fire_sound_off");

const minuteDisplay = document.querySelector(".minute");
const secondsDisplay = document.querySelector(".second");
let minute
let second
let timerTimeOut;

const rainSound = new Audio("./assets/som/Chuva.wav");
const florestSound = new Audio("./assets/som/Floresta.wav");
const coffeeSound = new Audio("./assets/som/Cafeteria.wav");
const fireSound = new Audio("./assets/som/Lareira.wav");
const finishSound = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");

//Buttons and songs environment
buttonRainOff.addEventListener("click", function () {
    buttonRainOn.classList.remove("hide");
    buttonRainOff.classList.add("hide");
    rainSound.play();
});

buttonRainOn.addEventListener("click", function () {
    buttonRainOn.classList.add("hide");
    buttonRainOff.classList.remove("hide");
    rainSound.pause();
});

buttonFlorestOff.addEventListener("click", function () {
    buttonFlorestOn.classList.remove("hide");
    buttonFlorestOff.classList.add("hide");
    florestSound.play();
});

buttonFlorestOn.addEventListener("click", function () {
    buttonFlorestOn.classList.add("hide");
    buttonFlorestOff.classList.remove("hide");
    florestSound.pause();
});

buttonCoffeeOff.addEventListener("click", function () {
    buttonCoffeeON.classList.remove("hide");
    buttonCoffeeOff.classList.add("hide");
    coffeeSound.play();
});

buttonCoffeeON.addEventListener("click", function () {
    buttonCoffeeON.classList.add("hide");
    buttonCoffeeOff.classList.remove("hide");
    coffeeSound.pause();
});

buttonFireOff.addEventListener("click", function () {
    buttonFireOn.classList.remove("hide");
    buttonFireOff.classList.add("hide");
    fireSound.play();
});

buttonFireOn.addEventListener("click", function () {
    buttonFireOn.classList.add("hide");
    buttonFireOff.classList.remove("hide");
    fireSound.pause();
});

//buttons timer

//rodar cronometro
function countdown() {
    timerTimeOut = setTimeout(function () {
    let segundos = Number(secondsDisplay.textContent);
    let minutos = Number(minuteDisplay.textContent);

    secondsDisplay.textContent = "00";

    if (minutos <= 0 && Seconds <= 0) {
        finishSound.play();
        ResetTimer();
        return;
    }

    if (segundos <= 0) {
        segundos = 60;

        --minute
    }
    secondsDisplay.textContent = String(segundos - 1).padStart(2, 0);
    minuteDisplay.textContent = String(minutos).padStart(2, 0);

    countdown();
    }, 1000);
}
//botão de play no cronometro
buttonPlay.addEventListener("click", function () {
    countdown();
});

//botão de pause e reset para cronometro
buttonStop.addEventListener("click", function () {
    clearTimeout(timerTimeOut);
});

function ResetTimer() {
    minute = 0;
    second = 0;

    secondsDisplay.textContent = String(second).padStart(2, 0);
    minuteDisplay.textContent = String(minute).padStart(2, 0);

    PlayButton.disabled = false;
}

//botão de menos para diminuir 5 minutos no cronometro
buttonMenos.addEventListener("click", function () {
    minute = Number(minuteDisplay.textContent);
    minuteDisplay.textContent = String(minute - 5).padStart(2, 0);
    if (minute <= 5) {
    minuteDisplay.textContent = String(minute - minute).padStart(2, 0);
    buttonMenos.disabled = true;
    }
    buttonPlay.disabled = false;
});
//botão de mais para aumentar 5 minutos no cronometro
buttonMais.addEventListener("click", function () {
    minute = Number(minuteDisplay.textContent);
    minuteDisplay.textContent = String(minute + 5).padStart(2, 0);
});

//Buttons and songs environment

//buttons timer

//rodar cronometro

//botão de play no cronometro

//botão de pause e reset para cronometro

//botão de menos para diminuir 5 minutos no cronometro

//botão de mais para aumentar 5 minutos no cronometro

//botão de play no cronometro

//botão de pause e reset para cronometro

//botão de menos para diminuir 5 minutos no cronometro

//botão de mais para aumentar 5 minutos no cronometro
