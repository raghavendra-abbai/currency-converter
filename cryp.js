async function convertCrypto(){

const amount = document.getElementById("amount").value;
const crypto = document.getElementById("crypto").value;
const currency = document.getElementById("currency").value;
const resultDiv = document.getElementById("result");

if(amount === "" || amount <= 0){
resultDiv.innerHTML = "Please enter a valid amount";
return;
}

try{

const url =
`https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=${currency}`;

const response = await fetch(url);
const data = await response.json();

const price = data[crypto][currency];
const result = amount * price;

resultDiv.innerHTML =
`${amount} ${crypto.toUpperCase()} = ${result.toFixed(2)} ${currency.toUpperCase()}`;

}catch(error){

resultDiv.innerHTML = "Error fetching price. Try again.";

}

}