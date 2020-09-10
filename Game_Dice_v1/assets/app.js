/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var dice, roundScore, totalScore, activePlayer;
function changePlayer() {
    document.querySelector('#current-' + activePlayer).textContent = '0';
    document.querySelector('#score-' + activePlayer).textContent = totalScore[activePlayer];
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    activePlayer = activePlayer === 0 ? ActivePlayer = 1 : activePlayer = 0;
    roundScore = 0;
}

function clearGame() {
    activePlayer = 0;
    totalScore = [0, 0];
    roundScore = 0;
    document.querySelector('#name-0').innerHTML = ('player 1');
    document.querySelector('#name-1').innerHTML = ('player 2');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.btn-hold').style.display = 'block';
    document.querySelector('.btn-roll').style.display = 'block';

}
clearGame();

document.querySelector('.btn-roll').onclick = function () {

    dice = Math.floor(Math.random() * 6) + 1;

    if (dice == 1) {

        changePlayer();

    } else {

        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }

    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.dice').src = '../img/dice-' + dice + '.png';
};

document.querySelector('.btn-hold').onclick = function () {

    totalScore[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = totalScore[activePlayer];

    if (totalScore[activePlayer] >= 30) {
        document.querySelector('#name-' + activePlayer).innerHTML = ('Winner!');
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.btn-hold').style.display = 'none';
        document.querySelector('.btn-roll').style.display = 'none';
    } else {
        changePlayer();
    }
};

document.querySelector('.btn-new').onclick = clearGame; 

