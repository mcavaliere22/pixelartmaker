// Select color input
let color = document.getElementById("colorPicker");
// Select size input
let size = document.querySelector("#sizePicker")
size.addEventListener("submit", function(event) {
  event.preventDefault();
  let heightelem = document.getElementById("inputHeight");
  let widthelem = document.getElementById("inputWidth");
  let height = heightelem.value;
  let width = widthelem.value;
  clearGrid();
  makeGrid(height, width);
})

console.log(size);

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {
  const table = document.getElementById('pixelCanvas');
  for (let i = 0; i < height; i++) {
    let row = table.insertRow(i);
    for ( let j = 0; j < width; j++){
      let cell = row.insertCell(j);
    }
  }
   for (var i = 1; i <= height; i++) {
       table.insertAdjacentHTML("afterbegin", "<tr id = table" + i + "></tr>");
       var line = document.querySelector("#table" + i);
       for (var j = 1; j <= width; j++) {
           line.insertAdjacentHTML("afterbegin", "<td id = cell" + i + j +"></td>");
       }
   }}

document.getElementById("pixelCanvas").addEventListener("click", function makeGrid(height, weight) {
        let colorelem = document.getElementById("colorPicker");
        let color = colorelem.value;
        let click = event.target.id;
        document.getElementById(click).hasAttribute("style");
        document.getElementById(click).style.backgroundColor = color;
  })

function clearGrid() {
  var grid = document.getElementById('pixelCanvas');
  if (grid.innerHTML == "<b></b>") {
    grid.innerHTML = "pixelCanvas";
    }
  else {
    grid.innerHTML = "<b></b>";
  }
}
// Your code goes here!
