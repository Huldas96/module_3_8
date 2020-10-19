const snakeSpeed = 6; // Here you can adjust the speed of the snake
const snakeBody = [{ x: 11, y: 11}] // This is the default size of the snake
let newSegments = 0 

function updateSnake() { // This function updates the snake
    addSegments() // This function is in the bottom of this file
    const inputDirection = getInputDirection() // Check Input.js
    for (let i = snakeBody.length - 2; i  >= 0; i--) {
        snakeBody[i + 1] = {... snakeBody[i] }
    }

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

function drawSnake(gameBoard) { // This function draws the snake
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement("div") // create a div in the html
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add("snake") // here we fetch the style we created in html
        gameBoard.appendChild(snakeElement)
    })
}

function expandSnake(amount) {
    newSegments += amount
}

function onSnake(position, {ignoreHead = false} = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}

function getSnakeHead() { // This function gets the position of the snakehead
    return snakeBody[0]
}

function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true})
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y

}

/* This function makes a copy of the last item in the array and adds it to the end of it. */

function addSegments () { 
    for(let i = 0; i < newSegments; i++) { // For loop that stops if newSegments is more than i
        snakeBody.push({ ...snakeBody[snakeBody.length -1] }) 
    }
    newSegments = 0 // If you take out this line the snake runs forever and will become HUGE
}