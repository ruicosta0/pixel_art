// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


// When a square is clicked on it is filled in with the color the user has chosen on the colorPicker
function colorFillByClick (evt) {
    const color = document.getElementById("colorPicker").value;
    evt.target.bgColor=color;
}


// Function checks which squares contain color and then removes the color. If there is no color, nothing happens.
function clearColor (tableData) {
    const checkColor = "";
    for (let c = 0; c < tableData.length; c++) {
        if (tableData[c].bgColor != checkColor) {
           tableData[c].bgColor = "";
        }
    event.preventDefault();
    }
}

// Function checks if tableData exists already and if yes, executes clearColor function, else creates grid
function makeGrid(event) {
    const tableData = document.getElementsByTagName("td");
    if (tableData.length > 0) {
        clearColor(tableData);
    } else {
      const tblBody = document.createElement("tbody");                               // Table body is created
      for (let r = 0; r < document.getElementById("inputHeight").value; r++) {       // Loop uses height input to generate table rows
          var newRow = document.createElement("tr");
          for (let w = 0; w < document.getElementById("inputWidth").value; w++) {    // Loop uses width input to generate table data
               var newCell = document.createElement("td");
               newRow.appendChild(newCell);                                          // Table data/cells are appended to the rows
          }
      tblBody.appendChild(newRow);                                                   // Rows appended to the table body
      }
    pixelCanvas.appendChild(tblBody);                                                // Table body appended to the table
    event.preventDefault();
    tblBody.addEventListener('click', colorFillByClick)                              // Listener calls colorFillByClick function if user clicks in grid
    }
}

sizePicker.addEventListener('submit', makeGrid)           // on user clicking submit makeGrid function is called