const p1Btn = document.querySelector('#p1Button');
const p2Btn = document.querySelector('#p2Button');
const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');
const resetBtn = document.querySelector('#reset');

let winningScore = 5;


p1Btn.addEventListener('click', function () {
    if (parseInt(p1Score.innerText) !== winningScore) {
        p1Score.innerText = parseInt(p1Score.innerText) + 1;
    } else {
        console.log('game finished')
    }
});

p2Btn.addEventListener('click', function () {
    if (parseInt(p2Score.innerText) !== winningScore) {
        p2Score.innerText = parseInt(p2Score.innerText) + 1;
    } else {
        console.log('game finished')
    }
});

resetBtn.addEventListener('click', function () {
    p1Score.innerText = 0;
    p2Score.innerText = 0;
})
