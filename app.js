let BASE_URL = "https://api.budjet.org/fiat";
let dropdowns = document.querySelectorAll(".dropdown select");
let submitBtn = document.querySelector("form button");
let fromCurrency = document.querySelector(".from select");
let toCurrency = document.querySelector(".to select");
let msg = document.querySelector(".msg");

for (select of dropdowns) {
    for (currencyCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currencyCode;
        newOption.value = currencyCode;
        if (select.name === "from" && currencyCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currencyCode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (event) => {
        updateFlag(event.target);
    });
}

function updateFlag(element) {
    let currencyCode = element.value;
    let countryCode = countryList[currencyCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

submitBtn.addEventListener("click", async (event) => {
    event.preventDefault();
    let amount = document.querySelector(".amount input");
    let amountVal = amount.value;
    if (amount === "" || amountVal < 1) {
        amountVal = 1;
        amount.value = "1";
    }

    let URL = `${BASE_URL}/${fromCurrency.value}/${toCurrency.value}`;
    let response = await fetch(URL);
    let data = await response.json();
    for (key in data) {
        if (key == "conversion_rate") {
            conversion_rate = data[key];
        }
    }
    finalAmount = conversion_rate * amountVal
    msg.innerText = `${amountVal} ${fromCurrency.value} = ${finalAmount} ${toCurrency.value}`;
});