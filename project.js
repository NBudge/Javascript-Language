function add() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
  };

function subtract(number1, number2) {
    return number1 - number2;
  };

function addRevenues(add1, add2, add3) {
    let addNumber1 = Number(document.querySelector('#servicerev').value);
    let addNumber2 = Number(document.querySelector('#salesrev').value);
    let addNumber3 = Number(document.querySelector('#rentrev').value);
    document.querySelector('#totalrev').value = add(addNumber1, addNumber2, addNumber3);
};

document.querySelector('#addrev').addEventListener('click', addRevenues);

function addExpenses(add1, add2, add3, add4, add5) {
    let addNumber1 = Number(document.querySelector('#rentex').value);
    let addNumber2 = Number(document.querySelector('#salariesex').value);
    let addNumber3 = Number(document.querySelector('#suppliesex').value);
    let addNumber4 = Number(document.querySelector('#taxesex').value);
    let addNumber5 = Number(document.querySelector('#utilitiesex').value);
    document.querySelector('#totalex').value = add(addNumber1, addNumber2, addNumber3, addNumber4, addNumber5);
};

document.querySelector('#addex').addEventListener('click', addExpenses);

function netIncome(totalRev, totalEx) {
    let totalRevenue = Number(document.querySelector('#totalrev').value);
    let totalExpense = Number(document.querySelector('#totalex').value);
    document.querySelector('#netinc1').value = subtract(totalRevenue, totalExpense);
    document.querySelector('#netinc2').value = subtract(totalRevenue, totalExpense);
};

document.querySelector('#netinc').addEventListener('click', netIncome);

function retEarnings(retEarn1, netInc, div) {
    let retainedEarnings1 = Number(document.querySelector('#retainearn1').value);
    let netIncome = Number(document.querySelector('#netinc1').value);
    let dividends = Number(document.querySelector('#dividend').value);
    document.querySelector('#retainearn2').value = add(retainedEarnings1, netIncome) - dividends;
    document.querySelector('#retainearn3').value = add(retainedEarnings1, netIncome) - dividends;
};

document.querySelector('#retearn').addEventListener('click', retEarnings);

function currentAssets(add1, add2) {
    let addNumber1 = Number(document.querySelector('#cash').value);
    let addNumber2 = Number(document.querySelector('#accountrec').value);
    document.querySelector('#currentasset').value = add(addNumber1, addNumber2);
};

document.querySelector('#curasset').addEventListener('click', currentAssets);

function totalAssets(add1, add2, add3, add4) {
    let addNumber1 = Number(document.querySelector('#land').value);
    let addNumber2 = Number(document.querySelector('#buildings').value);
    let addNumber3 = Number(document.querySelector('#supplies').value);
    let addNumber4 = Number(document.querySelector('#currentasset').value);
    document.querySelector('#totalasset').value = add(addNumber1, addNumber2, addNumber3, addNumber4);
    document.querySelector('#totalasset2').value = add(addNumber1, addNumber2, addNumber3, addNumber4);

};

document.querySelector('#totasset').addEventListener('click', totalAssets);

function totalLiabilities(add1, add2) {
    let addNumber1 = Number(document.querySelector('#accountpay').value);
    let addNumber2 = Number(document.querySelector('#taxpay').value);
    document.querySelector('#totallia').value = add(addNumber1, addNumber2);
};

document.querySelector('#totlia').addEventListener('click', totalLiabilities);

function totalEquity(add1, add2) {
    let addNumber1 = Number(document.querySelector('#commonstock').value);
    let addNumber2 = Number(document.querySelector('#retainearn2').value);
    document.querySelector('#totalequ').value = add(addNumber1, addNumber2);
};

document.querySelector('#totequ').addEventListener('click', totalEquity);

function totalLiabilitiesEquity(add1, add2) {
    let addNumber1 = Number(document.querySelector('#totallia').value);
    let addNumber2 = Number(document.querySelector('#totalequ').value);
    document.querySelector('#totliaequ').value = add(addNumber1, addNumber2);
};

document.querySelector('#totlia').addEventListener('click', totalLiabilitiesEquity);
document.querySelector('#totequ').addEventListener('click', totalLiabilitiesEquity);