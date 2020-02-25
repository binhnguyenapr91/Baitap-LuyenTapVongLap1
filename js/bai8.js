let inputFromNumber=null;
let inputToNumber=null;
let selectedNumber=null;

function playGame(){
    inputFromNumber = parseInt(document.getElementById("fromNumber").value);
    inputToNumber = parseInt(document.getElementById("toNumber").value);
    selectedNumber = parseInt(prompt("Enter your selected number:"));

    alert(inputFromNumber);
    alert(inputToNumber);
    alert(getRandomValue(inputFromNumber,inputToNumber));
    alert(selectedNumber);


}

function getRandomValue(inputFrom,inputTo){
    inputFrom = Math.ceil(inputFrom);
    inputTo= Math.floor(inputTo);
    return Math.floor(Math.random() * (inputTo - inputFrom)) + inputTo;
}