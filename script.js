// DOM Elements
const randomText = document.getElementById("randomText");
const textInput = document.getElementById("textInput");
const result = document.getElementById("result");
const btn = document.getElementById("btn");
const heading = document.getElementById("heading");
const ref_btn = document.getElementById("btn_ref");

// Variables
let mismatchCount = 0;
let inputWord
let randomWord;
let durationInMin;
let startTime;
// Function to generate a random sentence
function generateRandomSentence(wordCount) {
    const words = [
        "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
        "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
        "magna", "aliqua", "Ut", "enim", "ad", "minim", "veniam", "quis", "nostrud",
        "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip", "ex", "ea", "commodo",
        "consequat", "Duis", "aute", "irure", "dolor", "in", "reprehenderit", "in", "voluptate",
        "velit", "esse", "cillum", "dolore", "eu", "fugiat", "nulla", "pariatur", "Excepteur",
        "sint", "occaecat", "cupidatat", "non", "proident", "sunt", "in", "culpa", "qui",
        "officia", "deserunt", "mollit", "anim", "id", "est", "laborum"
    ];

    let sentence = '';

    for (let i = 0; i < wordCount; i++) {
        const randomIndex = Math.floor(Math.random() * words.length);
        sentence += words[randomIndex] + ' ';
    }

    return sentence.trim().toLocaleLowerCase();
}

// Generate a random sentence
const randomSentence = generateRandomSentence(25);

// Function to evaluate input
function evaluateInput() {
    inputWord = textInput.value.trim().split(" ");
    randomWord = randomText.innerText.trim().split(" ");

    for (let i = 0; i < inputWord.length; i++) {
        if (inputWord[i] !== randomWord[i]) {
            mismatchCount++;
        }
    }
}

// Function to calculate typing speed (WPM)

// Event listener for the button
btn.addEventListener("click", function () {
    if (btn.innerText === "Start") {
        btn.innerText = "Done";
        textInput.disabled = false;
        textInput.style.borderColor = "grey";
        
        randomText.innerText = randomSentence;
        startTime = new Date();
    } else if (btn.innerText === "Done") {
        btn.innerText = "Start";
        textInput.disabled = true;
        textInput.style.borderColor = "white";
        evaluateInput();
        const stopTime = new Date();
        const duration = (stopTime - startTime) / 1000;
        durationInMin = duration / 60;
        function calculateSpeed() {
            if (inputWord.length != randomWord.length) {
                console.log("Typing speed: N/A");
              
            }
            
            const wpm = (randomWord.length - mismatchCount) / durationInMin;
            console.log("Typing speed: " + wpm.toFixed(2) + " WPM");
            heading.innerHTML = `<h3> ${wpm.toFixed(2)}  WPM </h3>`
        }
        calculateSpeed()
    }
});


ref_btn.addEventListener("click", function () {
    location.reload();
});


