let gameSeq = [];
let userSeq = [];
let gameScore = 0;
let gameStarted = false;
let gamelevel = 0;
let h3 = document.querySelector('h3');
let btns = ['bg-primary', 'bg-warning', 'bg-info', 'bg-success'];

// function 
document.addEventListener('keypress', function keyPress() {
    if (gameStarted == false) {
        gameStarted = true;
        levelUp();
    }
});


function levelUp() {
    console.log('levelUp');
    gamelevel++;
    h3.innerHTML = `level  ${gamelevel}`;
    let ranIdx = Math.floor(Math.random() * 3);
    let ranColor = btns[ranIdx];
    gameSeq.push(ranColor)
    let ranBtn = document.querySelector(`.${ranColor}`);
    flashButton(ranBtn);
};


function flashButton(btn) {
    btn.classList.add('flash-btn');
    setTimeout(function () {
        btn.classList.remove('flash-btn');
    }, 300);
}


// Button Event Listeners
let allBtns = document.querySelectorAll('.btn');
allBtns.forEach(btn => {
    btn.addEventListener('click', pressBtn);
});


function pressBtn() {
    let btn = this;
    let userColor = btn.getAttribute('id');
    userSeq.push(userColor);
    checkSeq();
};

function checkSeq() {
    let idx = gamelevel-1;
    if (userSeq[idx] == gameSeq[idx]) {
       if (userSeq.length == gameSeq.length) {
        levelUp();
       }
    }else{
        h3.innerHTML = `'Game Over! press any key to restart`;
    }
    
}

