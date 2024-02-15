const container = document.getElementById("container");

function grid(rows, cols){
    for(let i = 0; i < rows; i++){
        let cell = document.createElement("div");
        container.appendChild(cell);
        cell.style.border = "none";
        cell.style.padding = "0px";
        for(let x = 0; x < cols; x++){
            let cell1 = document.createElement("div");
            cell.appendChild(cell1);
            cell1.classList.add("cell");
        };
    };
};

grid(16, 16);