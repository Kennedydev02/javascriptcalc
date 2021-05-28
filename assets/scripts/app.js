'use strict';
const defaultResult = 0;
let currentResult = defaultResult;

//Get input from input field
function getUserInputNum() {
	return parseInt(userInput.value);
}

//Writes Calculation Description
function createAndWriteLog(operator, resultBefore, calcNumberUsed) {
	const userEntry = getUserInputNum();
	const calcDescription = `${resultBefore} ${operator} ${userEntry}`;
	outputResult(currentResult, calcDescription);
}

//Adding function
function add() {
	const userEntry = getUserInputNum();
	const initialResult = currentResult;
	currentResult = currentResult + userEntry;
	createAndWriteLog('+', initialResult, userEntry);
}

//Substracting function
function substract() {
	const userEntry = getUserInputNum();
	const initialResult = currentResult;
	currentResult = currentResult - userEntry;
	createAndWriteLog('-', initialResult, userEntry);
}

//mutliply function
function multiply() {
	const userEntry = getUserInputNum();
	const initialResult = currentResult;
	currentResult = currentResult * userEntry;
	createAndWriteLog('*', initialResult, userEntry);
}
//Divide function
function divide() {
	const userEntry = getUserInputNum();
	const initialResult = currentResult;
	currentResult = currentResult / userEntry;
	createAndWriteLog('/', initialResult, userEntry);
}
//Buttons clicker
addBtn.addEventListener('click', add);

subtractBtn.addEventListener('click', substract);

multiplyBtn.addEventListener('click', multiply);

divideBtn.addEventListener('click', divide);
