const countBtn = document.querySelector('.countBtn button');
let countNum = document.querySelector('.countNum a');

countBtn.addEventListener('click', countUp);
resetBtn.addEventListener('click', countUp);

function countUp(){
    countNum.innerHTML++;
}