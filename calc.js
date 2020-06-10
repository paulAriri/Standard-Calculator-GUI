window.onload = function() {
//Selecting Elements
var number = document.getElementsByClassName('number');
var operate = document.getElementsByClassName('operator');
var displayScreen= document.getElementById('calculator-screen');
var clear = document.getElementById('all-clear');
var backspace = document.getElementById('backspace');
var decimal = document.getElementById('decimal');

//Initializing Values
var displayVal = '0';
var endVal;

//Functions
var updateScreen = (clickObj) => {
	var text = clickObj.target.innerText;

	if(displayVal === '0'){
		displayVal = "";
	}
	if(displayVal  === "Infinity"){
		displayVal = "";
	}
	displayVal += text;
	displayScreen.innerHTML = displayVal;
}

var clearScreen = (clickObj) => {
	displayVal = '0';
	displayScreen.innerHTML = displayVal;
}

var deleteVal = (clickObj) => {
	let lengthOfDisplayVal = displayVal.length;
	displayVal = displayVal.slice(0, lengthOfDisplayVal-1);

	if(displayVal===""){
		displayVal="0";
	}

	displayScreen.innerHTML = displayVal;
}

var decimalVal = (clickObj) => {
	if(!displayVal.includes('.')){
		displayVal+=".";
	}
	displayScreen.innerHTML = displayVal;
}

var operateVal = (clickObj) => {
	var operation = clickObj.target.innerText;

	switch(operation){
		case("+"):
		displayVal+="+";
		displayScreen.innerHTML = displayVal;

		break;
		case("-"):
		displayVal+="-";
		displayScreen.innerHTML = displayVal;

		break;
		case("×"):
		displayVal+="*";
		displayScreen.innerHTML = displayVal;

		break;
		case("÷"):
		displayVal+="/";
		displayScreen.innerHTML = displayVal;

		break;
		case("="):
		endVal = eval(displayScreen.innerHTML);
		displayScreen.innerHTML = endVal;
		displayVal = endVal;

		break;
  }
	displayVal = displayScreen.innerHTML;
}

//Assigning the click operation to all elements
for(let i = 0; i < number.length ; i++){
	number[i].addEventListener("click", updateScreen, false);
}
for(let i = 0; i < operate.length ; i++){
	operate[i].addEventListener("click", operateVal, false);
}
clear.addEventListener("click", clearScreen, false);
backspace.addEventListener("click", deleteVal, false);
decimal.addEventListener("click", decimalVal, false);
}
