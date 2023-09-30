/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
  }

function addNumbers(add1, add2) {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2;
  }

const subtractNumbers = function (subtract1, subtract2) {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = (factor1, factor2) => {
    let factorNumber1 = Number(document.querySelector('#factor1').value);
    let factorNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factorNumber1, factorNumber2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
    return number1 / number2;
  }

const divideNumbers = function (dividend, divisor) {
    let dividendNumber = Number(document.querySelector('#dividend').value);
    let divisorNumber = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividendNumber, divisorNumber);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
const currentDate = new Date();

let year = 2022;

year = currentDate.getFullYear();

document.querySelector('#year').value = year;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let arrayElement = document.getElementById('array');
arrayElement.innerHTML = numbersArray;

/* Output Odds Only Array */

const oddsArray = numbersArray.filter(number => number % 2 === 1);
let oddsElement = document.getElementById('odds');
oddsElement.innerHTML = oddsArray;

/* Output Evens Only Array */

const evensArray = numbersArray.filter(number => number % 2 === 0);
let evensElement = document.getElementById('evens');
evensElement.innerHTML = evensArray;

/* Output Sum of Org. Array */

const sumOfArray = numbersArray.reduce((sum, number) => sum + number);
let sumOfElement = document.getElementById('sumOfArray');
sumOfElement.innerHTML = sumOfArray;

/* Output Multiplied by 2 Array */

const multipliedArray = numbersArray.map((number) => number * 2);
let multipliedElement = document.getElementById('multiplied');
multipliedElement.innerHTML = multipliedArray;

/* Output Sum of Multiplied by 2 Array */

const sumOfMultipliedArray = multipliedArray.reduce((sum, number) => sum + number);
let sumOfMultipliedElement = document.getElementById('sumOfMultiplied');
sumOfMultipliedElement.innerHTML = sumOfMultipliedArray;