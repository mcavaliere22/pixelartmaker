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
})

console.log(size);

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {
  var height = "";
  var width = "";
  for (var x = 1; x <= height; x++){
    height + x;
  }
  for (var i = 1; i <= width; i++){
    width + i;
  }
  return height + width;
}

let grid = document.querySelector("#pixelCanvas");
  var height = "";
  for ( var x = 1; x <= height; x++) {
    grid.insertHTMLadjacent('afterbegin', "<table> grid + 1 </table>");
    var width = "";
    for ( var i = 1; i <= weight; i++) {
      document.querySelector("#grid+1").
      insertHTMLadjacent('afterbegin', "<table> row + 1 </table)");
    }
  }

document.getElementById("pixelCanvas").addEventListener("submit", function() {
        let colorelem = document.getElementById("colorPicker");
        let color = colorelem.value;
        let click = event.target.id;
        document.getElementById(click).hasAttribute("style");
        document.getElementById(click).style.backgroundColor = color;
  })




// Your code goes here!
