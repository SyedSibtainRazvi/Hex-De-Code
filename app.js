const hexColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
var tapColor = document.querySelector("#tap");

tapColor.addEventListener("click", changeColor);

function changeColor() {
    let hex = "#";
    for (let i = 0; i < 6; i++) {
        hex = hex + hexColor[randomNumber()]
    }
    document.body.style.backgroundColor = hex;
    tapColor.textContent = hex;
}

function randomNumber() {
    return Math.floor(Math.random() * hexColor.length);
}