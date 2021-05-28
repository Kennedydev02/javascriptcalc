'use strict';
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

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

function writeToLog(
	prevResult,
	operationIdentifier,
	operationNumber,
	newResult
) {
	const logEntry = {
		prevResult: prevResult,
		operationKey: operationIdentifier,
		number: operationNumber,
		result: newResult,
	};
	logEntries.push(logEntry);
	console.log(logEntry.result);
	console.log(logEntries);
}

//Adding function
function add() {
	const userEntry = getUserInputNum();
	const initialResult = currentResult;
	currentResult += userEntry;
	createAndWriteLog('+', initialResult, userEntry);
	writeToLog(initialResult, 'ADD', userEntry, currentResult);
}

//Substracting function
function substract() {
	const userEntry = getUserInputNum();
	const initialResult = currentResult;
	currentResult -= userEntry;
	createAndWriteLog('-', initialResult, userEntry);
	writeToLog('SUBTRACT', initialResult, userEntry, currentResult);
}

//mutliply function
function multiply() {
	const userEntry = getUserInputNum();
	const initialResult = currentResult;
	currentResult *= userEntry;
	createAndWriteLog('*', initialResult, userEntry);
	writeToLog('MULTIPLY', initialResult, userEntry, currentResult);
}
//Divide function
function divide() {
	const userEntry = getUserInputNum();
	const initialResult = currentResult;
	currentResult /= userEntry;
	createAndWriteLog('/', initialResult, userEntry);
	writeToLog('DIVIDE', initialResult, userEntry, currentResult);
}
//Buttons clicker
addBtn.addEventListener('click', add);

subtractBtn.addEventListener('click', substract);

multiplyBtn.addEventListener('click', multiply);

divideBtn.addEventListener('click', divide);
