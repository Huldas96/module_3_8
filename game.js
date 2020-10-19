let lastRenderTime = 0;
let gameOver = false // Veriable called GameOver, default is false
const gameBoard = document.getElementById('game-board')

function main(currentTime) {  // This is the main fuction
    if (gameOver) { // If gameOver is true you loose
        return alert("ha-ha you lose! Refresh to start again >:)") // Kind message
    }

    window.requestAnimationFrame(main) // This gives us a timer that makes the snake move
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / snakeSpeed) return


    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {  // This function updates positions of the snake, food and checks death
    updateSnake()
    updateFood()
    checkDeath()
}

function draw() { // This function draws what you see on screen
    gameBoard.innerHTML = ""
    drawSnake(gameBoard) // Check Snake.js
    drawFood(gameBoard) // Check food.js
}

function checkDeath() { // Function that checks if you die 
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection() // gameOver becomes true if either functions are true as well
}
