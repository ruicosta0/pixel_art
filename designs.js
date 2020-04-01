// Select color input
// Select size input

const tblBody = document.createElement("tbody");
const tableData = document.getElementsByTagName("td");
const checkColor = "";

/*
@ desc Cells are filled with color specified in the colorPicker
@ param evt to enable reference to the target of the event or cell to color
*/
function colorFillByClick (evt) {
    const color = document.getElementById("colorPicker").value;
    evt.target.bgColor=color;
}

//Function clears out any colored cells within the grid when submit button on form is pressed
function resetGrid () {
    for (let c = 0; c < tableData.length; c++) {
        if (tableData[c].bgColor != checkColor) {
           tableData[c].bgColor = "";
        }
     event.preventDefault();
    }
}

/*
 * @desc Creates a grid of squares when submit button is pressed
 * @param int $height - number of squares representing the height of the grid
 * @param int $width - number of squares representing the width of the grid 
*/
function makeGrid(height, width) {
    tblBody.innerHTML = "";
    for (let r = 0; r < height;  r++) {                                 
          var newRow = document.createElement("tr");
          for (let w = 0; w < width; w++) {
              var newCell = document.createElement("td");
              newRow.appendChild(newCell);                              
          }
      tblBody.appendChild(newRow);                                              
    }
    pixelCanvas.appendChild(tblBody);                                    
    event.preventDefault();
    tblBody.addEventListener('click', colorFillByClick)                     
}

/*
* @desc If the table size is equal to the (height * width) on the form then call resetGrid to clear colors
* otherwise create a grid by calling makeGrid function
*/
sizePicker.addEventListener('submit', function(event) {
    if (tableData.length == (inputHeight.value*inputWidth.value)) {
        resetGrid();
    } else {
      let height = document.getElementById("inputHeight").value;
      let width = document.getElementById("inputWidth").value;
      makeGrid(height, width);
    }
})