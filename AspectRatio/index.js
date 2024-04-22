let widthInput = document.querySelector("#input1");
let heightInput = document.querySelector("#input2");
let widthConvert = document.querySelector(".convert-box-width");
let heightConvert = document.querySelector(".convert-box-height");

function changeWidth() {
    let aspectratio = widthInput.value / heightInput.value;
    widthConvert.value = (heightConvert.value * aspectratio).toFixed(2);
}

function changeHeight() {
    let aspectratio = widthInput.value / heightInput.value;
    heightConvert.value = widthConvert.value / aspectratio;
}

window.addEventListener("load", () => {
    widthInput.value = 16;
    heightInput.value = 9;
    widthConvert.value = 1280;
    heightConvert.value = 720;
    changeWidth();
    changeHeight();
})

widthInput.addEventListener('change', () => {
    console.log("SEXO");
    changeWidth();
    changeHeight();
});

heightInput.addEventListener('change', () => {
    changeHeight();
    changeWidth();
    console.log("SEXO");
})