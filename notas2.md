# INDEX 
import { Controls } from "./controls.js";
import { TimerSet } from "./timer.js";
import { sounds } from "./sounds.js";
import { SoundButton } from "./soundButton.js";

const buttonPlay = document.querySelector('.play');
const buttonStop = document.querySelector('.stop');
const buttonMais = document.querySelector('.mais');
const buttonMenos = document.querySelector('.menos');

const buttonFlorestOn = document.querySelector('.forest_sound_on');
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

let timerTimeOut

const sound = sounds()

const controls = Controls({
    buttonPlay,
    buttonMais,
    buttonMenos,
    timerSet,
    minute,
    minuteDisplay,
});

const timerSet = TimerSet({
    buttonStop,
    sounds,
    minute,
    second,
    timerTimeOut,
    minuteDisplay,
    secondsDisplay
})

const soundButton = SoundButton({
    buttonFlorestOn,
    buttonFlorestOff,
    buttonRainOn,
    buttonRainOff,
    buttonCoffeeON,
    buttonCoffeeOff,
    buttonFireOn,
    buttonFireOff,
});

    soundButton.BubuttonFlorestOn(),
    soundButton.buttonFlorestOff(),

    soundButton.buttonRainOn(),
    soundButton.buttonRainOff(),

    soundButton.buttonCoffeeON(),
    soundButton.buttonCoffeeOff(),
    
    soundButton.buttonFireOn(),
    soundButton.buttonFireOff();

# CONTROLS
export function Controls ({
    buttonPlay,
    buttonMais,
    buttonMenos,
    timerSet,
    minute,
    minuteDisplay
})

{
function ButtonPlay () {
    buttonPlay.addEventListener('click', function () {
    timerSet.countdown()
})
}

function ButtonMenos () {
    buttonMenos.addEventListener('click', function () {
    minute = Number(minuteDisplay.textContent)
    minuteDisplay.textContent = String(minute - 5).padStart(2, 0)
    if (minute <= 5) {
        minuteDisplay.textContent = String(minute - minute).padStart(2, 0);
        buttonMenos.disabled = true;
    }
    buttonPlay.disabled = false;
})
}

function ButtonMais (){
    buttonMais.addEventListener("click", function () {
    minute = Number(minuteDisplay.textContent)
    minuteDisplay.textContent = String(minute + 5).padStart(2, 0)

    buttonPlay.disabled = false;
})
}
return{
    ButtonPlay,
    ButtonMais,
    ButtonMenos
}
}

# TIMER 
export function TimerSet ({
    buttonPlay,
    buttonStop,
    sound,
    minute,
    second,
    timerTimeOut,
    minuteDisplay,
    secondsDisplay
})
{
    function Countdown() {
        timerTimeOut = setTimeout(function () {
        buttonPlay.disabled = true

        second = Number(secondsDisplay.textContent);
        minute = Number(minuteDisplay.textContent);

        if (minute <= 0 && second <= 0) {
            sound.finishSound.play() 
            ResetTimer()
            return;
        }

        else if (second <= 0) {
            second = 60;
            -- minute  
        }
        secondsDisplay.textContent = String(second - 1).padStart(2, 0);
        minuteDisplay.textContent = String(minute).padStart(2, 0);

        countdown();

    }, 
        1000);
    }

function ButtonStop () {
    buttonStop.addEventListener('click', function () {
    clearTimeout(timerTimeOut);

    buttonPlay.disabled = false;
})
}

function ResetTimer(){
    minute = 0;
    second = 0;
    secondsDisplay.textContent = String(second).padStart(2,0)
    minuteDisplay.textContent = String(minute).padStart(2,0)

    buttonPlay.disabled = false
}


return{
    Countdown,
    ButtonStop,
    ResetTimer
    }
}

# SOUNDS
export function sounds(){
    const rainSound = new Audio("./assets/som/Chuva.wav");
    const florestSound = new Audio("./assets/som/Floresta.wav");
    const coffeeSound = new Audio("./assets/som/Cafeteria.wav");
    const fireSound = new Audio("./assets/som/Lareira.wav");
    const finishSound = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");

rainSound.loop = true;
florestSound.loop = true;
coffeeSound.loop = true;
fireSound.loop = true;

return {
    rainSound,
    florestSound,
    coffeeSound,
    fireSound,
    finishSound
    }
}

# SoundButton
import {sounds} from './sounds'

const sound = sounds()

export function SoundButton({
    buttonFlorestOn,
    buttonFlorestOff,
    buttonRainOn,
    buttonRainOff,
    buttonCoffeeON,
    buttonCoffeeOff,
    buttonFireOn,
    buttonFireOff
})
{
    function FlorestOFF(){
        buttonFlorestOff.addEventListener("click", function () {
        buttonFlorestOn.classList.remove('hide')
        buttonFlorestOff.classList.add("hide")
        sounds.florestSound.play()
})
    }

    function FlorestON (){
        buttonFlorestOn.addEventListener("click", function () {
        buttonFlorestOn.classList.add('hide')
        buttonFlorestOff.classList.remove("hide")
        sounds.florestSound.pause();
    })
}
    function RainOFF (){
        buttonRainOff.addEventListener("click", function () {
        buttonRainOn.classList.remove("hide");
        buttonRainOff.classList.add("hide");
        sounds.rainSound.play();
    })
}

    function RainON (){
        buttonRainOn.addEventListener("click", function () {
        buttonRainOn.classList.add("hide");
        buttonRainOff.classList.remove("hide");
        sounds.rainSound.pause();
    })
}

    function CoffeeOFF (){
        buttonCoffeeOff.addEventListener("click", function () {
        buttonCoffeeON.classList.remove("hide")
        buttonCoffeeOff.classList.add('hide')
        sounds.coffeeSound.play()
    })
}
    function CoffeeON (){
        buttonCoffeeON.addEventListener('click', function () {
        buttonCoffeeON.classList.add("hide")
        buttonCoffeeOff.classList.remove("hide")
        sounds.coffeeSound.pause()
    })
}
    function FireOFF (){
        buttonFireOff.addEventListener('click', function () {
        buttonFireOn.classList.remove("hide")
        buttonFireOff.classList.add("hide")
        sounds. fireSound.play()
    })
}

    function FireON (){
        buttonFireOn.addEventListener('click', function () {
        buttonFireOn.classList.add('hide')
        buttonFireOff.classList.remove("hide")
        sounds.fireSound.pause()
})
    }

return{
    FlorestOFF,
    FlorestON,
    RainOFF,
    RainON,
    CoffeeOFF,
    CoffeeON,
    FireOFF,
    FireON
}
}