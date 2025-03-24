const canvas = document.querySelector("#canvas");

function drawCanvas(size = 16) {
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

drawCanvas();