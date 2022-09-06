
let player1 = Math.floor(Math.random() * 6) + 1;

let player2 = Math.floor(Math.random() * 6) + 1;

const heading = document.querySelector('h1');
const image1 = document.querySelector('.img1');
const image2 = document.querySelector('.img2');

if(player1 > player2){
    heading.textContent = 'Player 1 Wins';
}else if(player1 === player2){
    heading.textContent = 'Draw';
}else{
    heading.textContent = 'Player 2 Wins';
}

image1.setAttribute('src',`./images/dice${player1}.png`);
image2.setAttribute('src',`./images/dice${player2}.png`);




