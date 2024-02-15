// function play(){
//     // step-1: hide the home screen. to hide the screen add the hidden class to the home section 
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden')


//      // show the playground 
//      const playGroundSection = document.getElementById('play-ground');
//      playGroundSection.classList.remove('hidden')
    
// }

function continueGame(){
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('Your alphabet is:', alphabet);

    // display randomly generated alphabet 
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color 
    setBackGroundColorById(alphabet);
}

function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    console.log('Player pressed',playerPressed);

    // stop the game if pressed 'Esc'
    if (playerPressed === 'Escape'){
        gameOver();
    }
    
    // get expected to press 
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    // check match or not 
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');

        // score update 
        // 1. get the current score 
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);

        // 2. increase the score by 1 
        const newScore = currentScore + 1;
        // 3. show the update score 
        currentScoreElement.innerText = newScore;
        console.log(currentAlphabetElement);

        // start a new round 
        console.log('you have pressed correctly', expectedAlphabet);
        removeBackGroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('You missed. You lost a life');
        // step-1: get the current life 
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        // step-2: reduce the life count 
        const newLife = currentLife - 1;
        // step-3: display the update life count 
        currentLifeElement.innerText = newLife;


        // dectect life 
        if (newLife === 0){
            gameOver();
        }

    }
}

    // capture keyboard key press 
    document.addEventListener('keyup', handleKeyboardButtonPress)

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}


// Game over 
function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    // update final score 
    // 1. Get the final score 
    const lastScore = getTextElementValueById('current-score')
    console.log(lastScore);
    setTextElementValueById('game-score', lastScore);
}

// Play Again 
function playAgain(){
    hideElementById('final-score');
    showElementById('play-ground')

    // reset score and life 
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
}