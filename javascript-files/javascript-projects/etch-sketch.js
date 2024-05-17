function popup() {
    let dimensions = prompt("Please enter width of new sketch");
    if (dimensions > 100) {
        alert("Please be 100 or less");
        return;
    }
    const container = document.querySelector("#container");
    container.replaceChildren();
    makebox(dimensions);
}

function makebox(dimensions) {
    for (let i=0; i<dimensions; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        row.style.height = "" + 100/dimensions + "%";
        for (let j=0; j<dimensions; j++) {
            const box = document.createElement("div");
            box.classList.add("box");
            let red = Math.random() * 255;
            let blue = Math.random() * 255;
            let green = Math.random() * 255;
            box.style.opacity = 1;
            box.addEventListener("mouseout", () => {box.style.backgroundColor = `rgb(${red}, ${blue}, ${green}, )`; box.style.opacity = `${Number(box.style.opacity)-0.1}`;})
            box.style.width = "" + 100/dimensions + "%";
            row.appendChild(box);
        }
        const container = document.querySelector("#container");
        container.appendChild(row);
    }
}

makebox(16);

const button = document.querySelector("button");
button.addEventListener("click", () => { popup()})