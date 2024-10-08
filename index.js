/* clear input when refresh */
window.onload = function() {
    // Clear input fields
    document.getElementById("CheckAge-myText").value = '';
    document.getElementById("Circumference-myText").value = '';
    document.getElementById("guessInput").value = '';
    document.getElementById("calc-display").value = '';
    document.getElementById("TemperatureConverter-textBox").value = '';
    document.getElementById("DiceRoller-numOfDice").value = '';
    
    // Uncheck checkboxes or radio buttons
    document.getElementById("CheckState-myCheckBox").checked = false;
    document.getElementById("visaBtn").checked = false;
    document.getElementById("masterCardBtn").checked = false;
    document.getElementById("payPalBtn").checked = false;
    document.getElementById("toFahrenheit").checked = false;
    document.getElementById("toCelsius").checked = false;

    // Clear any result texts
    document.getElementById("Circumference-myH3").textContent = '';
    document.getElementById("subResult").textContent = '';
    document.getElementById("paymentResult").textContent = '';
    document.getElementById("CheckAge-resultElement").textContent = '';

    
    // Reset the counter
    document.getElementById("CounterProgram-countLabel").textContent = '0';
}

/* -----------button sound -------*/
// Access the audio element
const jumpSound = document.getElementById("jumpSound");

// Function to play the sound
function playSound() {
    jumpSound.currentTime = 0; // Reset the sound to start
    jumpSound.play();
}



/* --------calculate circumference of a circle----*/
const PI = 3.14;
let radius;
let circumference;

document.getElementById("Circumference-mySubmit").onclick = function() {
    playSound(); 
    radius = document.getElementById("Circumference-myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("Circumference-myH3").textContent = "The circumference of the circle is " + circumference + " cm.";
}

////////////////////////////////////////////////

/* --------Increase,Reset,Decrease----*/
const decreaseBtn = document.getElementById("CounterProgram-decreaseBtn");
const resetBtn = document.getElementById("CounterProgram-resetBtn");
const increaseBtn = document.getElementById("CounterProgram-increaseBtn");
const countLabel = document.getElementById("CounterProgram-countLabel");
let count = 0;

increaseBtn.onclick = function() {
    playSound(); 
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function() {
    playSound(); 
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function() {
    playSound(); 
    count = 0;
    countLabel.textContent = count;
}
/////////////////////////////////////////

/*----------Random Number ---------*/
const myButton = document.getElementById("RandomNumber-myButton");
const myLabel1 = document.getElementById("RandomNumber-myLabel1");
const myLabel2 = document.getElementById("RandomNumber-myLabel2");
const myLabel3 = document.getElementById("RandomNumber-myLabel3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function() {
    playSound(); 
    randomNum1 = Math.floor(Math.random() * max) + min ;
    randomNum2 = Math.floor(Math.random() * max) + min ;
    randomNum3 = Math.floor(Math.random() * max) + min ;
    myLabel1.textContent = randomNum1;
    myLabel2.textContent = randomNum2;
    myLabel3.textContent = randomNum3;
}

///////////////////////////////////


/* ----- check age ----------*/
const myText = document.getElementById("CheckAge-myText");
const mySubmit = document.getElementById("CheckAge-mySubmit");
const resultElement = document.getElementById("CheckAge-resultElement");
let age;

mySubmit.onclick = function() {
    playSound(); 
    age = myText.value;
    age = Number(age);

    if(age >= 100) {  
        resultElement.textContent = `You are too old to enter this site.`;
    }
    else if(age == 0){
        resultElement.textContent = `You can't enter. You were just born.`;
    }
    else if(age >= 18){
        resultElement.textContent = `You are old enough to enter this site.`;
    }
    else if(age < 0) {
        resultElement.textContent = `Your age can't be below 0.`;
    }
    else {
        resultElement.textContent = `You must be 18+ to enter this site.`;
    }

}


/* --------Check state ----*/
const myCheckBox = document.getElementById("CheckState-myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const CheckStateMySubmit = document.getElementById("CheckState-mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

CheckStateMySubmit.onclick = function() {
    playSound(); 
    if(myCheckBox.checked){
        subResult.textContent = `You are subscribed!`;
    }
    else{
        subResult.textContent = `You are NOT subscribed!`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with Visa.`;
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = `You are paying with MasterCard.`;
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = `You are paying with PayPal.`;
    }
    else{
        paymentResult.textContent = `You must select a payment type.`;
    }
    
}

/* --------Number Guessing game---*/

const minNumber = 50;
const maxNumber = 100;
let answer = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
let attempts = 0;

// Access HTML elements
const guessInput = document.getElementById("guessInput");
const guessSubmit = document.getElementById("guessSubmit");
const guessFeedback = document.getElementById("guessFeedback");
const attemptsDisplay = document.getElementById("attemptsDisplay");

guessSubmit.onclick = function() {
    playSound(); 
    const guess = Number(guessInput.value);
    
    // Validate input
    if (isNaN(guess)) {
        guessFeedback.textContent = "Please enter a valid number.";
    } else if (guess < minNumber || guess > maxNumber) {
        guessFeedback.textContent = `Please enter a number between ${minNumber} and ${maxNumber}.`;
    } else {
        attempts++;
        attemptsDisplay.textContent = `Attempts: ${attempts}`;
        
        // Check the guess
        if (guess < answer) {
            guessFeedback.textContent = "TOO LOW! TRY AGAIN!";
        } else if (guess > answer) {
            guessFeedback.textContent = "TOO HIGH! TRY AGAIN!";
        } else {
            guessFeedback.textContent = `CORRECT! The answer was ${answer}. It took you ${attempts} attempts.`;
            guessSubmit.disabled = true; // Disable button after correct guess
        }
    }
};
/* Calculator */
function clearDisplay() {
    document.getElementById('calc-display').value = '';
}

function appendToDisplay(value) {
    document.getElementById('calc-display').value += value;
}

function calculateResult() {
    const display = document.getElementById('calc-display');
    try {
        display.value = eval(display.value) || '';
    } catch (error) {
        display.value = 'Error';
    }
}

/* Temperature Converter */
const textBox = document.getElementById("TemperatureConverter-textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("TemperatureConverter-result");

function convert() {
    let temp = Number(textBox.value);
    
    if (toFahrenheit.checked) {
        temp = temp * 9/5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    } else if (toCelsius.checked) {
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C";
    } else {
        result.textContent = "Please select a unit";
    }
}

/* Dice Roller */
function rollDice(){
    const numOfDice = document.getElementById("DiceRoller-numOfDice").value;
    const diceResult = document.getElementById("DiceRoller-diceResult");
    const diceImages = document.getElementById("DiceRoller-diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="../CodeFidget Dashboard/assets/Dice-${value}.png" alt="Dice ${value}">`);
    }

    diceResult.textContent = `Dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');

    
}


/* password generator */
document.getElementById('generatePassword').addEventListener('click', function () {
    const length = document.getElementById('passwordLength').value;
    const includeLowercase = document.getElementById('includeLowercase').checked;
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;

    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characters = '';
    if (includeLowercase) characters += lowercase;
    if (includeUppercase) characters += uppercase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    if (characters === '') {
        alert('Please select at least one character type.');
        return;
        
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById('generatedPassword').value = password;
});




