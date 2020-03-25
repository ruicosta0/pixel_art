// Select color input
// Select size input

const tblBody = document.createElement("tbody");
const tableData = document.getElementsByTagName("td");
const checkColor = "";
//const grid = document.getElementsByTagName("tr");

//Cell is filled with color specified in the colorPicker when user clicks within grid. Function triggered by listener held in makeGrid function. 
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

//Function creates a grid using the height and width inputs on the form when submit button is pressed
function makeGrid(height, width) {
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
    
/* If the table size is equal to the (height * width) on the form then call resetGrid to clear out the colored cells, 
otherwise create a grid by calling makeGrid function */
sizePicker.addEventListener('submit', function(event) {
    if (tableData.length == (inputHeight.value*inputWidth.value)) {
        resetGrid();
    } else {
      document.getElementById("pixelCanvas").innerHTML = "";
      let height = document.getElementById("inputHeight").value;
      let width = document.getElementById("inputWidth").value;
      makeGrid(height, width); 
      }
})