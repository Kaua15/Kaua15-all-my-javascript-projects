const next1 = document.querySelector('.next1');
const next2 = document.querySelector('.next2');
const back1 = document.querySelector('.back1');
const back2 = document.querySelector('.back2');
const form1 = document.querySelector('.form1');
const form2 = document.querySelector('.form2');
const form3 = document.querySelector('.form3');
const submit = document.querySelector('.submit');
const steps = document.querySelectorAll('.step');


next1.addEventListener('click', (e) => {
    e.preventDefault();
    form1.style.left = '-950px';
    form2.style.left = '50%';
    steps[1].classList.add('active')
    console.log(steps[1]);

});

next2.addEventListener('click', (e) => {
    e.preventDefault();
    form2.style.left = '-950px';
    form3.style.left = '50%';
    steps[2].classList.add('active')
});

back1.addEventListener('click', (e) => {
    e.preventDefault();
    form1.style.left = '50%';
    form2.style.left = '950px';
    steps[1].classList.remove('active')
});

back2.addEventListener('click', (e) => {
    e.preventDefault();
    form2.style.left = '50%';
    form3.style.left = '950px';
    steps[2].classList.remove('active')
});

submit.addEventListener('click', (e) => {
    e.preventDefault();
});


