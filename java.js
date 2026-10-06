let score = 0
let time = 30
let lives = 3

let gameActive = false

document.addEventListener("click", (event) => {
    if (gameActive == true) {
        let element = event.target;
        if (element.id == "gameFrame") {
            console.log("MISS")
            updLives()
            flash(document.body, "rgb(136, 71, 71)", "rgb(73, 73, 73)")
        } else if (element.id == "btn") {
            console.log("HIT")
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
    gameActive = false
    document.getElementById("timerText").textContent = "GAME OVER"
    console.log("GG")
}

function updLives() {
    if (gameActive == true) {
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
    if (gameActive == true) {
        let btn = document.getElementById("btn")
        let gameFrame = document.getElementById("gameFrame")
        let xPos = Math.floor(Math.random() * (gameFrame.clientWidth - 100))
        let yPos = Math.floor(Math.random() * (gameFrame.clientHeight - 200))
        btn.style.marginLeft = xPos
        btn.style.marginTop = yPos
        updScore()
        flash(btn, "rgb(146, 228, 161)", "rgb(255, 255, 255)")
    }
}

function createTarget() {
    
}

function startTimer() {
    if (gameActive == false) {
        gameActive = true
        let duration = time
        document.getElementById("timerText").textContent = "Timer: " + duration
        let timerThread = setInterval(() => {
            document.getElementById("timerText").textContent = "Timer: " + duration
            if (duration > 0 && gameActive == true) {
                 duration -= 1
                document.getElementById("timerText").textContent = "Timer: " + duration
                console.log(duration)
            } else if (duration <= 0 || lives <= 0) {
                endGame()
                clearInterval(timerThread)
            }
         }, 1000);
    }
}

function start() {
    console.log("STARTED")
    let startBtn = document.getElementById("startBtn")
    startBtn.style.visibility = "hidden"
    startBtn.style.marginTop = "0px"
    startBtn.style.marginBottom = "0px"
    document.getElementById("btn").style.visibility = "visible"
    document.getElementById("titleText").style.visibility = "hidden"
    startTimer()
    updPos()
}
