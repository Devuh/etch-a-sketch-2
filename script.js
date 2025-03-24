const canvas = document.querySelector("#canvas");
const newCanvas = document.querySelector("#newCanvas");

let rainbow = false;
let darken = false;

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
        if(!rainbow && !darken) {
            event.target.setAttribute("style", "background-color: black; opacity: 1");
        }
        
        if(rainbow) {
            let red = Math.floor(Math.random() * 255);
            let green = Math.floor(Math.random() * 255);
            let blue = Math.floor(Math.random() * 255);
            let color = `rgb(${red},${green},${blue})`;

            event.target.setAttribute("style", `background-color: ${color}; opacity: 1`);
        }

        if(darken) {
            let opacity = parseFloat(window.getComputedStyle(event.target).getPropertyValue("opacity"));
            if(opacity < 1) {
                opacity += 0.1;
                console.log(opacity);
                event.target.setAttribute("style", `background-color: rgb(0, 0, 0); opacity: ${opacity}`);
            }
        }
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

    if(event.target.getAttribute("id") == "rgb") {
        rainbow = !rainbow;
        darken = false;
    }

    if(event.target.getAttribute("id") == "darken") {
        darken = !darken;
        rainbow = false;
    }
});

drawCanvas();