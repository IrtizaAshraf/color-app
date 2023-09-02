

// const addcolor = document.querySelector("button").length;

// for (let d = 0; d < addcolor.length; d++) {
//       // const element = array[d];
//       document.querySelector("button").addEventListener("click", function () {
//             const button = this.innerHTML;
//             switch (button) {
//                   case "g":
//                         const green = document.querySelector("#container")
//                         green.style.BackgroundColour ="Green"() 
                        
//                         break;
            
//                   default:
//                         break;
//             }
            
//       })
      
// }



const display = document.getElementById("color")
const colors = ["Green","Red","Blue","purple"];
display.innerHTML+=`<li><button>${colors.slice(0,1)}</button></li>`
display.innerHTML+=`<li><button>${colors.slice(1,2)}</button></li>`
display.innerHTML+=`<li><button>${colors.slice(2,3)}</button></li>`
display.innerHTML+=`<li><button>${colors.slice(3,4)}</button></li>`


// function createColorButtons() {
//       const display = document.getElementById("color");
//       const colors = ["Green", "Red", "Blue", "Purple"];
    
//       colors.forEach(color => {
//         const li = document.createElement("li");
//         const button = document.createElement("button");
//         button.textContent = color;
//         li.appendChild(button);
//         display.appendChild(li);
//       });
// }
    
// // Call the function to create the color buttons
// display.innerHTML.style.backgroundColour ="Green"
// createColorButtons();
    

// function green() {
//       display.innerHTML.style.backgroundColour ="green"
// }










function addColor(green) {
      // Assuming you have a display element to show the selected color
      const display = document.getElementById("container");
    
      // Clear previous content and set the new color
      display.innerHTML = green;
      display.innerHTML.style.backgroundColour="Green"
}
    

























// display.innerHTML+=`<li><button class="green">${color.slice(0,1)}</button></li>`
// display.innerHTML+=`<li><button class="red">${color.slice(1,2)}</button></li>`
// display.innerHTML+=`<li><button class="blue">${color.slice(2,3)}</button></li>`
// display.innerHTML+=`<li><button class="purple">${color.slice(3,4)}</button></li>`

// const color = ["Green","Red","Blue","Purple"];
// console.log(`${color}`);




// const colors = document.querySelector("#colors")


// function addcolors() {
//       const addcolour = document.querySelector("#container");
//       if (addcolour.style.backgroundColor == "white") {
//             `<button>green</button>`
//             addcolour.style.backgroundColor = "green";
//             // para.style.Color = "pink";
//       }
//       else {
//             para.style.backgroundColor = "gray";
//             para.style.color = "white";

//       }     
      
// }