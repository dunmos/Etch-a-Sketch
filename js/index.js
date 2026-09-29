const container = document.getElementById("container");
const resizeButton = document.getElementById("resizeButton");

function createGrid(numberOfSquares) {

    // Remove the existing grid
    container.innerHTML = "";

    // Calculate the size of each square
    const squareSize = 640 / numberOfSquares;

    // Create the new squares
    for (let i = 0; i < numberOfSquares * numberOfSquares; i++) {
    
        const square = document.createElement("div");

        square.classList.add("square");

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

    // Keep track of how many times the square has been hovered
        let opacity = 0;

        square.addEventListener("mouseenter", function () {

            // Generate random RGB values
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);

            // Change the square's color
            square.style.backgroundColor =
                `rgb(${red}, ${green}, ${blue})`;

            // Increase opacity by 10%
            opacity += 0.1;

            // Prevent opacity from going above 1
            if (opacity > 1) {
                opacity = 1;
            }

            square.style.opacity = opacity;
        });
    container.appendChild(square);
}
}

    // Create the original 16 × 16 grid
     createGrid(16);

     // Button
     resizeButton.addEventListener("click", function () {

    const userInput = prompt("Enter the number of squares per side (maximum 100):");

    const numberOfSquares = Number(userInput);

    // Check that the number is valid
    if (
        Number.isInteger(numberOfSquares) &&
        numberOfSquares >= 1 &&
        numberOfSquares <= 100
    ) {
        createGrid(numberOfSquares);
    } else {
        alert("Please enter a whole number between 1 and 100.");
    }
});