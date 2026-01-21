const container = document.querySelector(".container");
const btn = document.querySelector(".btn-grid-input");
const containerSize = 400; // px

// randomises the colour of the squares
function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

container.style.width = `${containerSize}px`;

function createGrid(squaresPerSide) {
    container.innerHTML = ""; // remove old grid
    const boxSize = containerSize / squaresPerSide; 
    const totalBoxes = squaresPerSide * squaresPerSide;

    for (let i = 0; i < totalBoxes; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = randomRGB();
        });
        container.appendChild(box);
    }
}

btn.addEventListener("click", () => {
    const input = prompt("How many squares per side?");
    const squaresPerSide = parseInt(input, 10);
    if (Number.isNaN(squaresPerSide) || squaresPerSide <= 0) return;
    createGrid(squaresPerSide);
});

createGrid(4); // starting grid 4x4






