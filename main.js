const container = document.getElementById("container");
let cellWidthPercentage = 0;
let cellHeightPercentage = 0;

function grid(rows, cols){
    for(let i = 0; i < rows; i++){
        let cell = document.createElement("div");
        container.appendChild(cell);
        cell.style.border = "none";
        cell.style.padding = "0px";

        //calculate the percentage width for each cell
        let cellWidthPercentage = 100 / cols;
        let cellHeightPercentage = 100 / rows;
        cell.style.width = `${cellWidthPercentage}%`;
        cell.style.height = `${cellHeightPercentage}%`;

        for(let x = 0; x < cols; x++){
            let cell1 = document.createElement("div");
            cell.appendChild(cell1);
            cell1.classList.add("cell");

            cell1.addEventListener("mouseover", function () {
                this.classList.add("hover");
            });
        };
    };
};

grid(16, 16);

let gridSize = 0;

let resize = document.getElementById("resize");
resize.addEventListener("click", function (){
    container.replaceChildren();
    gridSize=prompt("Enter the grid size you would like to use max 100.");
    grid.clear;

    cellWidthPercentage = 100 / gridSize;
    cellHeightPercentage = 100 / gridSize;
    grid(gridSize, gridSize);
});


