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
    "apple", "banana", "orange", "grape", "lemon", "kiwi", "pear", "melon",
    "carrot", "potato", "tomato", "cucumber", "onion", "pepper", "broccoli", "lettuce",
    "bread", "butter", "cheese", "milk", "egg", "yogurt", "rice", "pasta",
    "chicken", "beef", "fish", "shrimp", "sausage", "bacon", "ham", "steak",
    "coffee", "tea", "juice", "water", "soda", "milkshake", "smoothie", "lemonade",
    "cake", "cookie", "pie", "icecream", "chocolate", "candy", "popcorn", "chips",
    "dog", "cat", "bird", "fish", "rabbit", "hamster", "turtle", "snake",
    "car", "bus", "train", "bike", "boat", "plane", "truck", "motorcycle",
    "house", "apartment", "bedroom", "kitchen", "bathroom", "livingroom", "diningroom", "garage",
    "school", "hospital", "office", "library", "park", "store", "restaurant", "bank",
    "book", "pen", "pencil", "paper", "notebook", "computer", "phone", "tablet",
    "sun", "moon", "star", "cloud", "rain", "snow", "wind", "storm"
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


