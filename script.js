let color_input = document.querySelector("#color_picker");
let color_span = document.querySelector("#color_container");

let slider = document.querySelector("#slider");
let slider_text = document.querySelector("#slider_text");

let checkboxes = document.querySelectorAll(".type");

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

function createGrid(size) {
  let parentDiv = document.querySelector("#main_container");
  parentDiv.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for(let i = 0; i < size ** 2; i++) {
      let childDiv = document.createElement("div");
      parentDiv.appendChild(childDiv);
    }
  }

createGrid(16);

// var randomColor = Math.floor(Math.random()*16777215).toString(16);
// childDiv.style.backgroundColor = `#${randomColor}`;