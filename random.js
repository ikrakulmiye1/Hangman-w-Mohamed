//Display option buttons
const displayOptions = () => {
    optionsContainer.innerHTML += '<h3> Please Select An Option </h3>';
    let buttonCon = document.createElement("div");
    for(let vaule in options){
    buttonCon.innerHTML += '<button class="options" onclick="generateWord('${vaule}')">${value}</button>';
    }
    optionsContainer.appendchild(buttonCon);
};

//Block all the buttons
const blocker = () => {
    let optionsButtons= document.querySelectorAll
    (".option");
    let letterButtons = document.querySelectorAll
    (".letters");
    //display all options
    optionsButtons.forEach((button) => {
        button.disabled = true;
    });
    //display all letters
    letterButtons.forEach((button) => {
        button.displayed.true;
    })
newGameContainer.classList.remove("hide");
};

//Word Generator
const generateWord = (optionValue) => {
    let optionsButtons = document.querySelectorAll
    (".options");
    //if optionVaule matches the button innterText then highligh the button
    optionsButtons.forEach((button) => {
    if (button.innerText.tolowerCase() === optionValue) {
        button.classList.add("active");
    }
    button.disabled = true;
});
//initially hide letters, clear previous word
letterContainer.classlist.remove("hide");
userInputSection.innertEXT = "";

let optionArray = options[optionVaue];
//choose random word
chosenWord = optionArray[Math.floor(Math.random () * optionArray.length)];
chosenWord = chosenWord.toUpperCase();
console.log(chosenWord);

//replace every letter with span conntaining dash
let displayItem = chosenWord.replace(/./g,
'<span class="dashes">_</span>');

//Display each element as span
userInputSection.innerHTML = displayItem;
};

//Initial Function (Called when page loads/user presses new game)
const initializer = () => {
    winCount = 0;
    count = 0;
    // Initially earse all content and hise letters and new game button
    userInputSection.innerHTML = "";
    optionsContainer.innerHTML = "";
    letterContainer.classList.add("hide");
    newGameContainer.classList.add("hide");
    letterContainer.innerHTML = "";

    //for creating letter buttons
    for(let i =65; i <91; i++) {
        let button = document.createElement("button");
        button.classList.add("letters");
    //Number to ASCII[A-Z]
        button.innerHTML = String.fromCharCode(i);
    //character nutton click
    button.addEventListener("click", () => {
        let charArray = chosenWord.split("");
        let dashes = document.getElementsByClassName
    });
    //if array containes clicked vaule replace the matched dash with letter else dam on canvas
    if(charArray.includes(button.innerText)){
        charArray.forEach((char,index) => {
        //if character in array is same as clicked button
        if(char === button.innerText) {
        //replace dashes with letters
        dashes[index].innerText = char;
        winCount += 1;
        if (winCount == charArray.length) {
            resultText.innerHTML = `<h2 class='win-msg'>You Win!!</h2><p>The word was <span>${chosenWord}</span></p>`;
            //block all buttons
            blocker();
        }
        }  
        });
    } else {
        //lose count
        count += 1;
        //for drawing man
        drawMan(count);
        //Count==6 because head,body,left arm, right arm,left leg,right leg
        if (count == 6) {
          resultText.innerHTML = `<h2 class='lose-msg'>You Lose!!</h2><p>The word was <span>${chosenWord}</span></p>`;
          blocker();
        }
      }
      //disable clicked button
      button.disabled = true;
    };
    letterContainer.append(button);
  }
  displayOptions();
  //Call to canvasCreator (for clearing previous canvas and creating initial canvas)
  let { initialDrawing } = canvasCreator();
  //initialDrawing would draw the frame
  initialDrawing();


//Canvas
const canvasCreator = () => {
  let context = canvas.getContext("2d");
  context.beginPath();
  context.strokeStyle = "#000";
  context.lineWidth = 2;
  //For drawing lines
  const drawLine = (fromX, fromY, toX, toY) => {
    context.moveTo(fromX, fromY);
    context.lineTo(toX, toY);
    context.stroke();
  };
  const head = () => {
    context.beginPath();
    context.arc(70, 30, 10, 0, Math.PI * 2, true);
    context.stroke();
  };
  const body = () => {
    drawLine(70, 40, 70, 80);
  };
  const leftArm = () => {
    drawLine(70, 50, 50, 70);
  };
  const rightArm = () => {
    drawLine(70, 50, 90, 70);
  };
  const leftLeg = () => {
    drawLine(70, 80, 50, 110);
  };
  const rightLeg = () => {
    drawLine(70, 80, 90, 110);
  };
  //initial frame
  const initialDrawing = () => {
    //clear canvas
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    //bottom line
    drawLine(10, 130, 130, 130);
    //left line
    drawLine(10, 10, 10, 131);
    //top line
    drawLine(10, 10, 70, 10);
    //small top line
    drawLine(70, 10, 70, 20);
  };
  return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg };
};
//draw the man
const drawMan = (count) => {
  let { head, body, leftArm, rightArm, leftLeg, rightLeg } = canvasCreator();
  switch (count) {
    case 1:
      head();
      break;
    case 2:
      body();
      break;
    case 3:
      leftArm();
      break;
    case 4:
      rightArm();
      break;
    case 5:
      leftLeg();
      break;
    case 6:
      rightLeg();
      break;
    default:
      break;
  }
};
//New Game
newGameButton.addEventListener("click", initializer);
window.onload = initializer;


//New Game
newGameButton.addEventListener("click",initializer);
window.onload = initializer;

