
let itsYou = document.getElementById('itsYou');
    
let welcomeYou = document.getElementById('welcomeYou');

let gameSection = document.getElementById('game');

itsYou.onclick = function() {
    itsYou.style.color = "#f4f4f4";
    welcomeYou.classList.remove('hidden');
    welcomeYou.addEventListener('click', game);
};



function game(){
    itsYou.classList.add('hidden');
    welcomeYou.classList.add('hidden');
    gameSection.classList.remove('hidden');
}

gameSection.firstElementChild.ondblclick = function() {game2()};
let gameZone = document.getElementById('game_zone');

let hat = document.getElementById('hat');
let big = document.getElementById('maiorball');
let medium = document.getElementById('mediumball');
let small = document.getElementById('smallball');
let others = document.getElementById('others');
let snowman = document.getElementById('snowman');


function game2(){
    gameSection.firstElementChild.classList.add('hidden');
    gameZone.classList.remove('hidden');
    gameZone.onclick = function() {
        hat.classList.remove('hidden');
        big.classList.remove('hidden');
        medium.classList.remove('hidden');
        small.classList.remove('hidden');
        others.classList.remove('hidden');
    };
    game3();
}

let hatTurn, othersTurn, bigTurn, mediumTurn, smallTurn;

function game3(){
    let counter = 0;
    
    hat.addEventListener('click', fhat => {
        ++counter;
        hatTurn = counter;
        hat.classList.add('hidden');
        if(counter == 5){
            verifyWin();
        }
    });
    others.addEventListener('click', fothers => {
        ++counter;
        othersTurn = counter;
        others.classList.add('hidden');
        if(counter == 5){
            verifyWin();
        }
    });
    big.addEventListener('click', fbig => {
        ++counter;
        bigTurn = counter;
        big.classList.add('hidden');
        if(counter == 5){
            verifyWin();
        }
    });
    medium.addEventListener('click', fmedium => {
        ++counter;
        mediumTurn = counter;
        medium.classList.add('hidden');
        if(counter == 5){
            verifyWin();
        }
    });
    small.addEventListener('click', fsmall => {
        ++counter;
        smallTurn = counter;
        small.classList.add('hidden');
        if(counter == 5){
            verifyWin();
        }
    });
}

function verifyWin(){
    
        if((bigTurn < mediumTurn) && (mediumTurn < smallTurn) && (smallTurn < othersTurn) && (othersTurn < hatTurn)){
            snowman.classList.remove('hidden');
            snowman.ondblclick = function(){finalPage()}; 
        }
        else{
            gameZone.classList.add('hidden');
            let gameOver = document.getElementById('gameover');
            let tryAgain = document.getElementById('tryagain');
            gameOver.classList.remove('hidden');
            tryAgain.classList.remove('hidden');
            tryAgain.onmouseenter = function() {tryAgain.style.color = "#f4f4f4"};
            tryAgain.onmouseleave = function() {tryAgain.style.color = "#000000"};
            tryAgain.onclick = function() {
                gameOver.classList.add('hidden');
                tryAgain.classList.add('hidden');
                game2()
            };
        }
}

function finalPage(){
    gameZone.classList.add('hidden');
    snowman.classList.add('hidden');
    let finalSection = document.getElementById('final');
    finalSection.classList.remove('hidden');
}



