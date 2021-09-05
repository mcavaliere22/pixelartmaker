// Select color input
let color = document.getElementById("colorchoice");
// Select size input
let size = document.querySelector("#sizeselection")
size.addEventListener("click", function(event) {
  event.preventDefault();
  let height = height.value;
  let width = width.value;  
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

// Your code goes here!
