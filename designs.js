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
  var table = document.querySelector("pixelCanvas");
   for (var i = 1; i <= height; i++) {
       table.insertAdjacentHTML("afterbegin", "<tr id = table" + i + "></tr>");
       var line = document.querySelector("#table" + i);
       for (var j = 1; j <= width; j++) {
           line.insertAdjacentHTML("afterbegin", "<td id = cell" + i + j +"></td>");
       }
   }}

document.getElementById("pixelCanvas").addEventListener("submit", function makeGrid(height, weight) {
        let colorelem = document.getElementById("colorPicker");
        let color = colorelem.value;
        let click = event.target.id;
        document.getElementById(click).hasAttribute("style");
        document.getElementById(click).style.backgroundColor = color;
  })




// Your code goes here!
