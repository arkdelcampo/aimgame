let score = 0
let time = 30
let lives = 3

let gameState = "titleScreen"

document.addEventListener("click", (event) => {
    let element = event.target;
    if (gameState == "ingame") {
        if (element.id == "gameFrame") {
            console.log("MISS")
            updLives()
            flash(document.body, "rgba(255, 194, 194, 0.42)", "rgb(255, 255, 255)")
        } else if (element.id == "btn") {
            console.log("HIT")
        }
    } else if (gameState == "titleScreen") {
        if (element.id == "gameFrame") {
            start()
        }
    }
});

// cosmetic function
function flash(element, flashColor, ogColor) { 
    element.style.backgroundColor = flashColor
    element.style.transition = "background-color 0s"
    setTimeout(function() {
        element.style.transition = "background-color .5s";
        element.style.backgroundColor = ogColor;
    }, 5);
}

function endGame() {
    gameState = "gameOver"
    // document.getElementById("timerText").textContent = "GAME OVER"
    console.log("GG")
}

function updLives() {
    if (gameState == "ingame") {
        lives--
        document.getElementById("livesText").textContent = "Lives: " + lives
        if (lives <= 0) {
            endGame()
        }
    }
}

function updScore() {
    score += 1
    document.getElementById("scoreText").textContent = "Score: " + score
}

function updPos() {
    if (gameState == "ingame") {
        let btn = document.getElementById("btn")
        let gameFrame = document.getElementById("gameFrame")
        let xPos = Math.floor(Math.random() * 100)
        let yPos = Math.floor(Math.random() * 100)
        btn.style.left = xPos + "%"
        btn.style.top = yPos + "%"
        updScore()
        flash(btn, "rgb(146, 228, 161)", "rgb(255, 255, 255)")
    }
}

function createTarget() {
    
}

// function startTimer() {
//     if (gameActive == false) {
//         gameActive = true
//         let duration = time
//         document.getElementById("timerText").textContent = "Timer: " + duration
//         let timerThread = setInterval(() => {
//             document.getElementById("timerText").textContent = "Timer: " + duration
//             if (duration > 0 && gameActive == true) {
//                  duration -= 1
//                 document.getElementById("timerText").textContent = "Timer: " + duration
//                 console.log(duration)
//             } else if (duration <= 0 || lives <= 0) {
//                 endGame()
//                 clearInterval(timerThread)
//             }
//          }, 1000);
//     }
// }

function start() {
    console.log("STARTED")
    document.getElementById("startText").style.visibility = "hidden"
    document.getElementById("btn").style.visibility = "visible"
    document.getElementById("titleText").style.visibility = "hidden"
    // startTimer()
    gameState = "ingame"
    updPos()
}
