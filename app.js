const p1Btn = document.querySelector('#p1Button');
const p2Btn = document.querySelector('#p2Button');
const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');
const resetBtn = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

let winningScore = parseInt(winningScoreSelect.value);
let isGameOver = false;


    p1Btn.addEventListener('click', function () {
        if (!isGameOver) {
            p1Score.innerText = parseInt(p1Score.innerText) + 1;

            if (parseInt(p1Score.innerText) === winningScore) {
                isGameOver = true;
                p1Score.classList.add('has-text-success');
                p2Score.classList.add('has-text-danger');
                p1Btn.disabled = true;
                p2Btn.disabled = true;
            }
        }
    });

    p2Btn.addEventListener('click', function () {
        if (!isGameOver) {
            p2Score.innerText = parseInt(p2Score.innerText) + 1;

            if (parseInt(p2Score.innerText) === winningScore) {
                isGameOver = true;
                p2Score.classList.add('has-text-success');
                p1Score.classList.add('has-text-danger');
                p1Btn.disabled = true;
                p2Btn.disabled = true;
            }
        }
    });

    winningScoreSelect.addEventListener('change', function () {
        winningScore = parseInt(this.value);
        reset();
    })

    resetBtn.addEventListener('click', reset);

    function reset() {
        isGameOver = false;
        p1Score.innerText = 0;
        p2Score.innerText = 0;
        p1Score.classList.remove('has-text-success', 'has-text-danger');
        p2Score.classList.remove('has-text-success', 'has-text-danger');
        p1Btn.disabled = false;
        p2Btn.disabled = false;
    }
