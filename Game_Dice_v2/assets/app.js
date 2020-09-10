/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var dice_0,dice_1,roundScore,totalScore,activePlayer, memory_0 , memory_1,endPoint;

document.querySelector('.btn-hold').style.display = 'none';
document.querySelector('.btn-roll').style.display = 'none';

alert("Choose Win Points and Submit");

clearGame();

function changePlayer() {
    document.querySelector('#current-' + activePlayer).textContent = '0';
    document.querySelector('#score-' + activePlayer).textContent = totalScore[activePlayer];
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    activePlayer = activePlayer === 0 ? ActivePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    memory_0 = 0;
    memory_1 = 0;
}

function clearGame() {
   
    document.querySelector('#name-0').innerHTML = ('player 1');
    document.querySelector('#name-1').innerHTML = ('player 2');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#dice-0').style.display = 'none';
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('.btn-submit').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'none';
    document.querySelector('.btn-roll').style.display = 'none';
    activePlayer = 0;
    totalScore = [0, 0];
    roundScore = 0;

}

document.querySelector('.btn-submit').onclick = function(){
    
    endPoint = document.querySelector('.points').value;
    if (isNaN(endPoint) || endPoint<1){
        alert("Invalid Input");
    }else{
        alert(`In each turn, a player rolls a dice as many times as he whishes.
        Each result get added to his ROUND score BUT, if the player rolls a 1, all his ROUND score gets lost.
        After that, it's the next player's turnThe player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score.
        After that, it's the next player's turnThe first player to reach ${endPoint} points on GLOBAL score wins the game`);
        document.querySelector('.btn-submit').style.display = 'none';
        document.querySelector('.btn-hold').style.display = 'block';
        document.querySelector('.btn-roll').style.display = 'block';
    }
};

document.querySelector('.btn-roll').onclick = function () {
    memory_0 = dice_0;
    memory_1 = dice_1;
    dice_0 = Math.floor(Math.random() * 6) + 1;
    dice_1 = Math.floor(Math.random() * 6) + 1;

    if (dice_0 == 1 || dice_1 == 1) {

        changePlayer();

    } else if(memory_0 == 6 && memory_1 == 6 && dice_0 == 6 && dice_1 == 6) {

        totalScore[activePlayer] = 0;
        changePlayer();

    }else {
        roundScore += dice_0 + dice_1;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }

    document.querySelector('#dice-0').style.display = 'block';
    document.querySelector('#dice-1').style.display = 'block';
    document.querySelector('#dice-0').src = '../img/dice-' + dice_0 + '.png';
    document.querySelector('#dice-1').src = '../img/dice-' + dice_1 + '.png';
};

document.querySelector('.btn-hold').onclick = function () {

    totalScore[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = totalScore[activePlayer];

    if (totalScore[activePlayer] >= endPoint) {
        document.querySelector('#name-' + activePlayer).innerHTML = ('Winner!');
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.btn-hold').style.display = 'none';
        document.querySelector('.btn-roll').style.display = 'none';
    } else {
        changePlayer();
    }
};

document.querySelector('.btn-new').onclick = clearGame; 

