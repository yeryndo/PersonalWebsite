const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const testText = document.querySelector("#testingText p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer = [0, 0, 0, 0];
var interval;
var timerRunning = false;

// Add leading zero to numbers 9 or below (purely for aesthetics): helper function to make sure they are all two digits
function leadingZero (time){
    if (time <= 9) { //single digit number
        time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer () {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor((timer[3] - (timer[1] * 100) - (timer[0] * 6000)));
}

// Match the text entered with the provided text on the page:
function spellCheck() {
    let textEntered = testArea.value;
    let ongoingTextMatcher = testText.substring(0, textEntered.length);

    if (textEntered == testText){ 
        clearInterval(interval);
        testWrapper.style.borderColor = "blue";
    } else {
        if (textEntered == ongoingTextMatcher){
            testWrapper.style.borderColor = "green";
        } else {
            testWrapper.style.borderColor = "red";
        }
    }
}

// Start the timer:
function start() {
    let textLength = testArea.value.length;
    if (textLength === 0 && !timerRunning){
        timerRunning = true;
        interval = setInterval(runTimer, 10);
    }
    console.log(textLength);
}

// Reset everything:
function reset () {
    clearInterval(interval);
    interval = null;
    timer = [0, 0, 0, 0];
    timerRunning = false;

    //clear text area
    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    //line around box back to gray
    testWrapper.style.borderColor = "gray";
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);