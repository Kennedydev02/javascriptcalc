'use strict';
const defaultResult = 0;
let currentResult = defaultResult;

//Get input from input field
function getUserInputNum() {
	return parseInt(userInput.value);
}

function createAndWriteLog(operator, resultBeforeCalc, calcNum) {
	const calcDescription = `${resultBeforeCalc} ${operator} ${calcNum}`;
	outputResult(currentResult, calcDescription);
}

//Addition
function addition() {
	const userEntry = getUserInputNum();
	const initialResult = currentResult;
	currentResult = currentResult + parseInt(userEntry);
	createAndWriteLog('+', initialResult, userEntry);
}

function subtract() {
	const userEntry = getUserInputNum();
	const initialResult = currentResult;
	currentResult = currentResult - parseInt(userEntry);
	createAndWriteLog('-', initialResult, userEntry);
}

function multiply() {
	const userEntry = getUserInputNum();
	const initialResult = currentResult;
	currentResult = currentResult * parseInt(userEntry);
	createAndWriteLog('*', initialResult, userEntry);
}

function divide() {
	const userEntry = getUserInputNum();
	const initialResult = currentResult;
	currentResult = currentResult / parseInt(userEntry);
	createAndWriteLog('/', initialResult, userEntry);
}

addBtn.addEventListener('click', addition);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
