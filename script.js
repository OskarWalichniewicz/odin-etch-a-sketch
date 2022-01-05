let color_input = document.querySelector("#color_picker");
let color_span = document.querySelector("#color_container");

let slider = document.querySelector("#slider");
let slider_text = document.querySelector("#slider_text");

let checkboxes = document.querySelectorAll(".type");

let btn_color = document.querySelector("#btn_color");
let btn_rainbow = document.querySelector("#btn_rainbow");
let btn_eraser = document.querySelector("#btn_eraser");

let btn_clear = document.querySelector("#btn_clear");

/**
 * @param  {int} size - How many columns and rows will be created
 * 
 * Creates divs and puts them in #main_container, with {size} columns and rows
 */
 function createGrid(size) {
  let parentDiv = document.querySelector("#main_container");
  parentDiv.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for(let i = 0; i < size ** 2; i++) {
    let childDiv = document.createElement("div");
      childDiv.addEventListener("mouseover", function() {
        if(btn_color.checked === true) {
          childDiv.style.backgroundColor = color_input.value;
        }
        if(btn_rainbow.checked === true) {
          let randomColor = Math.floor(Math.random()*16777215).toString(16);
          childDiv.style.backgroundColor = `#${randomColor}`;
        }
        if(btn_eraser.checked === true) {
          childDiv.style.backgroundColor = '#bbdfc8';
        }
      });
    parentDiv.appendChild(childDiv);
  }
}

// Removes all child elements of main_container
function removeGrid () {
  let parentDiv = document.querySelector("#main_container");
  while (parentDiv.firstChild) {
    parentDiv.removeChild(parentDiv.lastChild);
  }
}

// When you click span (color container), you open hidden color picker (input)
color_span.addEventListener("click", function() {
  color_input.click();
});

// When color_input is changed, the background of color square changes
color_input.addEventListener("input", function() {
  color_span.style.backgroundColor = color_input.value;
})

// When slider value changes, text changes accordingly
slider.addEventListener("input", function() {
  let size = slider.value;
  slider_text.textContent = `${size}x${size}`;
})

/* Each checkbox has a method set, that unchecks all other checkboxes,
   and checks only clicked one */
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", function () {
    // Makes every checkbox unchecked
    checkboxes.forEach((other_checkboxes) => {
      other_checkboxes.checked = false;
    });
    // Sets clicked one to checked
    checkbox.checked = true;
  });
});

// On slider value change, it changes the grid size (removes old & creates new one)
slider.addEventListener("input", function() {
  removeGrid();
  createGrid(slider.value);
})

/* On button 'Clear' click, removes all child nodes of main 
   container and creates new one with current slider_value */
btn_clear.addEventListener("click", function () {
  removeGrid();
  createGrid(slider.value);
});

// Creates grid with initial value on page open
createGrid(slider.value);