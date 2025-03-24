const canvas = document.querySelector("#canvas");
const newCanvas = document.querySelector("#newCanvas");

function drawCanvas(size = 16) {
    while(canvas.lastElementChild) {
        canvas.removeChild(canvas.lastElementChild);
    }

    for(let i = 0; i < size; i++) {
        const column = document.createElement("div");
        column.setAttribute("class", "column");
        canvas.appendChild(column);
        for(let i = 0; i < size; i++) {
            const square = document.createElement("div");
            square.setAttribute("class", "square");
            column.appendChild(square);
        }
    }
}

canvas.addEventListener("mouseover", (event) => {
    if(event.target.getAttribute("class") == "square") {
        event.target.setAttribute("style", "background-color: black");
    }
});

document.addEventListener("click", (event) => {
    if(event.target.getAttribute("id") == "newCanvas") {
        let size = prompt("What size canvas would you like?")
        if(size <= 100 && size > 0) {
            drawCanvas(size);
        } else {
            alert("Size must be between 1-100. Please try again.");
        }
    }
});

drawCanvas();