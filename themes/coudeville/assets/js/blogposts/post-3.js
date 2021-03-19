const hueInput = document.querySelector('.js-hue-input');
const hueOutput = document.querySelector('.js-hue-output');
const saturationInput = document.querySelector('.js-saturation-input');
const saturationOutput = document.querySelector('.js-saturation-output');
const lightnessInput = document.querySelector('.js-lightness-input');
const lightnessOutput = document.querySelector('.js-lightness-output');
const palette = document.querySelector('.js-palette');

function setHue() {
    hueOutput.value = hueInput.value + '°';
    palette.style.setProperty('--palette-hue', hueInput.value);
}

function setSaturation() {
    saturationOutput.value = saturationInput.value + '%';
    palette.style.setProperty('--palette-saturation', saturationInput.value + "%");
}

function setLightness() {
    lightnessOutput.value = lightnessInput.value + '%';
    palette.style.setProperty('--palette-lightness', lightnessInput.value + "%");
}

function setDefaultState() {
    setHue();
    setSaturation();
    setLightness();
}

hueInput.addEventListener('input', function () {
    setHue();
});

saturationInput.addEventListener('input', function () {
    setSaturation();
});

lightnessInput.addEventListener('input', function () {
    setLightness();
});

document.addEventListener('DOMContentLoaded', function () {
    setDefaultState();
});