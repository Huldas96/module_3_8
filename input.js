let inputDirection = { x: 0, y: 0}
let lastInputDirection = { x: 0, y: 0}

window.addEventListener("keydown", e => { // Here is an eventlistener 
    switch (e.key) { 
        case "ArrowUp": // If you press the up arrow this code will run
            if (lastInputDirection.y !== 0) break // If you are going down you cant go up
            inputDirection = { x: 0, y: -1 }
            break
        case "ArrowDown":
            if (lastInputDirection.y !== 0) break // If you are going up you cant go down
            inputDirection = { x: 0, y: 1 }
            break
        case "ArrowLeft":
            if (lastInputDirection.x !== 0) break // If you are going right you cant go left
            inputDirection = { x: -1, y: 0 }
            break
        case "ArrowRight":
            if (lastInputDirection.x !== 0) break // If you are going left you cant go right
            inputDirection = { x: 1, y: 0 }
            break
    
    }
})

function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}