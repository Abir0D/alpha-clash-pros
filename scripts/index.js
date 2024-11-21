// function play(){
//     //  step-1: hide the home screen, want to hide the screen add the class hidden to the home section 
//     //show the play ground

//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden')
//     // console.log(homeSection.classList);

//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden')
//     // console.log(playGroundSection.classList);
// }


function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    //stop the game if pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver()
    } 



    //key player  expected to press 
    const currentAlphabetElement = document.getElementById('current-alphabets');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check right or wrong key pressed 
    if (playerPressed === expectedAlphabet) {
        console.log('you got a point ');

        const currentScore = getTextElementValueById('current-score');
        console.log(currentScore);
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);

        // update score:

        // 1: get the current score
        //  const currentScoreElement = document.getElementById('current-score');
        //  const currentScoreText = currentScoreElement.innerText;
        //  const currentScore = parseInt(currentScoreText);
        //  console.log(currentScoreText)
        // console.log(currentScore);


        // // 2: increase the score by 1
        // const newScore = currentScore + 1
        // // 3: show the updated score
        //  currentScoreElement.innerText = newScore

        console.log('you have pressed correctly ', expectedAlphabet);


        //    start a new round

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('wrong key pressed. lost a point');

        const currentLife = getTextElementValueById('current-life')
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if (updatedLife === 0) {
            gameOver();
        }

        // ----------------------------------------
        // // step-1: get the current life or score number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText)
        // // step-2: reduce the life count
        // const newLife = currentLife - 1;
        // // step-3: display the update life or score count
        // currentLifeElement.innerText = newLife;
    }
}


document.addEventListener('keyup', handleKeyboardKeyUpEvent)

// function handleKeyboardKeyUpEvent(event) {
//     const playerPressed = event.key;
//     console.log('player pressed', playerPressed);

//   get the expected to press
const currentAlphabetElement = document.getElementById('current-alphabets');
const currentAlphabet = currentAlphabetElement.innerText
const expectedAlphabet = currentAlphabet.toLowerCase()
// console.log(playerPressed, expectedAlphabet);
//  check match or not
if (playerPressed === expectedAlphabet) {
    // console.log('you got a point')
}
else {
    // console.log('you missed. you lost a life')
}



document.addEventListener('keyup', handleKeyboardKeyUpEvent)


// call back function

// function handleKeyboardButtonPress(){
//     console.log('button press')
// }
// // capture keyboard key press
// document.addEventListener('keyup', handleKeyboardButtonPress) 

function continueGame() {
    //    step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabets', alphabet)


    // set randomly generated alphabet to the screen ( display )

    const currentAlphabetElement = document.getElementById('current-alphabets');
    currentAlphabetElement.innerText = alphabet;
    // set background color

    setBackgroundColorById(alphabet);

    // removeBackgroundColorById(alphabet)
}
function play() {
    // hide everything show only playground
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');

    //   reset score & life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');

    // update final score 
    // 1. get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);

    //  clear the last selected highlight alphabet
    const currentAlphabet = getElementTextById('current-alphabets');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}