let food = getRandomFoodPosition() // veriable that shows up randomly on the screen
const expansionRate = 2 // This veriable controls how much the snake grows once he gets food

function updateFood() { // Function that generates new food once the snake eats the old one
    if (onSnake(food)) { // If the snake is on the foods current position the next lines run
        expandSnake(expansionRate) // The snake becomes bigger and relies on the expansionRate
        food = getRandomFoodPosition() // The food will get a new random position on the screen
    }
}

function drawFood(gameBoard) { // This function draws the food
    const foodElement = document.createElement("div") // create a div in the HTML
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add("food") // here we fetch the style we created in html
    gameBoard.appendChild(foodElement)
    
}

function getRandomFoodPosition() { // Function that generates a random position for the food
    let newFoodPosition
    while(newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}

