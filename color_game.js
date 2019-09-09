let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor(); 
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1"); 
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");

// EASY BUTTON

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected"); 
    easyBtn.classList.add("selected"); 
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor; 
    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i]; 
        } else{
            squares[i].style.display = "none";
        }
    }
})

// HARD BUTTON

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected"); 
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
     for (let i = 0; i<squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
          
     }
})




// RESET BUTTON

resetButton.addEventListener("click", function(){
    
    colors = generateRandomColors(numSquares);
    
     pickedColor = pickColor();
    

    this.textContent="New Colors"

    colorDisplay.textContent = pickedColor;
    
    messageDisplay.textContent = "";
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue"; 

    
})




colorDisplay.textContent = pickedColor;

for(let i = 0; i<squares.length; i++){

    
    squares[i].style.backgroundColor = colors[i];

    
    squares[i].addEventListener("click", function(){
        
        let clickedColor = squares[i].style.backgroundColor;
        
        console.log(clickedColor, pickedColor);
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!"; 
            resetButton.textContent = "Play again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323"; 
            messageDisplay.textContent = "Try Again"; 
        }
    });
}



function changeColors(color){

for (let i=0; i<squares.length; i++){

squares[i].style.backgroundColor = color;
    }

}



function pickColor(){
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}







function randomColor(){
    
    let r = Math.floor(Math.random() * 256);
    
    let g = Math.floor(Math.random() * 256);
    
    let b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", " + g + ", " + b + ")"; 
}



function generateRandomColors(num){
    
    let arr = [];
    
    for(let i = 0; i < num; i++){
        
        arr.push(randomColor());
    }
    
    return arr;

}




