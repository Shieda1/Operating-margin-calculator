// https://calculator.swiftutors.com/operating-margin-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const operatingMarginRadio = document.getElementById('operatingMarginRadio');
const operatingIncomeRadio = document.getElementById('operatingIncomeRadio');
const netSalesRadio = document.getElementById('netSalesRadio');

let operatingMargin;
let operatingIncome = v1;
let netSales = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

operatingMarginRadio.addEventListener('click', function() {
  variable1.textContent = 'Operating Income';
  variable2.textContent = 'Net Sales';
  operatingIncome = v1;
  netSales = v2;
});

operatingIncomeRadio.addEventListener('click', function() {
  variable1.textContent = 'Operating Margin(%)';
  variable2.textContent = 'Net Sales';
  operatingMargin = v1;
  netSales = v2;
});

netSalesRadio.addEventListener('click', function() {
  variable1.textContent = 'Operating Margin(%)';
  variable2.textContent = 'Operating Income';
  operatingMargin = v1;
  operatingIncome = v2;
});


btn.addEventListener('click', function() {
  
  if(operatingMarginRadio.checked)
    result.textContent = `Operating Margin = ${computeOperatingMargin().toFixed(2)}%`;

  else if(operatingIncomeRadio.checked)
    result.textContent = `Operating Income = ${computeOperatingIncome().toFixed(2)}`;

  else if(netSalesRadio.checked)
    result.textContent = `Net Sales = ${computeNetSales().toFixed(2)}`;
})

// calculation

function computeOperatingMargin() {
  return (Number(operatingIncome.value) / Number(netSales.value)) * 100;
}

function computeOperatingIncome() {
  return (Number(operatingMargin.value) / 100) * Number(netSales.value);
}

function computeNetSales() {
  return Number(operatingIncome.value) / (Number(operatingMargin.value) / 100);
}