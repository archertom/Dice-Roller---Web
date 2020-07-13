// This programme takes the logic of Dice.py and turns it into a browser-based dice roller
// This is a useful thing for players of tabletop games which require dice.
// Many games require polyhedral dice other than the classic cube, or "D6".
// Therefore this programme allows the user to select the number of sides their dice needs,
// as well as the number of dice to roll.

var nDice
var nSides
var diceHeader = document.getElementById("dice header");
var sidesHeader = document.getElementById("sides header");
var button = document.getElementById("rollAgain");

init();

function init(){
    makeNDiceToolbar();
    makeNSidesToolbar();
    makeDice();
    makeButton();
}

function makeNDiceToolbar(){
    var buttons = document.getElementsByClassName("ndice");
    console.log(buttons);
    for(i = 0; i < buttons.length; i++){
        console.log(buttons[i]);
        buttons[i].addEventListener("click", function(e){
            var buttons = document.getElementsByClassName("ndice");
            console.log(buttons);
            for(i = 0; i < buttons.length; i++){
                buttons[i].classList.remove("active");
            }
            e.target.classList.add("active");
            nDice = e.target.textContent;
        });
    }
}

function makeNSidesToolbar(){
    var buttons = document.getElementsByClassName("nsides");
    console.log(buttons);
    for(i = 0; i < buttons.length; i++){
        console.log(buttons[i]);
        buttons[i].addEventListener("click", function(e){
            var buttons = document.getElementsByClassName("nsides");
            console.log(buttons);
            for(i = 0; i < buttons.length; i++){
                buttons[i].classList.remove("active");
            }
            e.target.classList.add("active");
            nSides = e.target.value;
        });
    }
}

// Random integer function from stackoverflow:
function diceRoll(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    console.log(min, max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Make dice appear
function makeDice(){
    reset();
    diceHeader.textContent = nDice;
    sidesHeader.textContent = nSides;
    for(var i = 0; i < nDice; i++){
        var newDice = document.createElement("div");
        console.log(nSides, parseInt(nSides, 10));
        var newRoll = document.createTextNode(diceRoll(1, parseInt(nSides, 10)));
        newDice.setAttribute("class", "dice text-center");
        newDice.appendChild(newRoll);
        var dicePlace = document.getElementById("dicePlace");
        dicePlace.insertBefore(newDice, null);
    }
}


function makeButton(){
    button.addEventListener("click", function(){
    makeDice();
    });
}

// resets the dice for each roll.  Prevents new dice being continually appended.
function reset(){
    var elements = document.getElementsByClassName("dice");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

