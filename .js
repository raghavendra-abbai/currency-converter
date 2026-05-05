#jss file
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");
const swapBtn = document.getElementById("swap");

let currencyList = [];

async function loadCurrencies() {
  const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
  const data = await response.json();

  currencyList = Object.keys(data.rates);

  currencyList.forEach(currency => {
    let option1 = document.createElement("option");
    let option2 = document.createElement("option");

    option1.value = option2.value = currency;
    option1.textContent = option2.textContent = currency;

    fromCurrency.appendChild(option1);
    toCurrency.appendChild(option2);
  });

  fromCurrency.value = "USD";
  toCurrency.value = "INR";
}

async function convertCurrency() {
  const amount = document.getElementById("amount").value;
  const from = fromCurrency.value;
  const to = toCurrency.value;

  try {
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
    const data = await response.json();

    const rate = data.rates[to];
    const convertedAmount = (amount * rate).toFixed(2);

    result.innerHTML = `${amount} ${from} = ${convertedAmount} ${to}`;
  } catch (error) {
    result.innerHTML = "⚠️ Failed to fetch exchange rate.";
  }
}

swapBtn.addEventListener("click", () => {
  let temp = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = temp;
});

convertBtn.addEventListener("click", convertCurrency);

loadCurrencies();
