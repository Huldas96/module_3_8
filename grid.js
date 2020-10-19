const gridSize = 21 // The grid is 21x21 in size

function randomGridPosition() { // This function calculates random spots for food to appear
    return {
        x: Math.floor(Math.random() * gridSize) + 1, // random number between 1-21
        y: Math.floor(Math.random() * gridSize) + 1 // random number between 1-21
    }
}

function outsideGrid(position) { // This function checks if the snake has gone outside the grid
    return (
        position.x < 1 || position.x > gridSize || position.y < 1 || position.y > gridSize
    )
}