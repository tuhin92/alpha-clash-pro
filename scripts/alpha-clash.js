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
    console.log('Your alphabet is:', alphabet);

    // display randomly generated alphabet 
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color 
    setBackGroundColorById(alphabet);
}




function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}