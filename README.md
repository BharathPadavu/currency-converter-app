# 💱 Currency Converter App

![Screenshot](./screenshot.png)

A **simple, interactive, and real-time currency converter** built using **HTML, CSS, and JavaScript**. Convert between **multiple world currencies** instantly with up-to-date exchange rates.  

---

## 🚀 Live Demo

Check it out here: [BharathPadavu/currency-converter-app](https://BharathPadavu.github.io/currency-converter-app/)

---

## 🛠 Features

- 🌎 Convert currencies between **any two countries**.  
- 💹 Fetches **real-time conversion rates** using an API.  
- 🏳️ Displays the **country flag** next to the selected currency.  
- 🔢 Automatic handling of **invalid or empty input values**.  
- ⚡ **Fast and lightweight** – no frameworks required.  

---

## 💻 Technical Details

**DOM Manipulation:**  
- Dynamically generates **currency dropdown options** from the `countryList` object in `codes.js`.  
- Updates the **flag images** when the user changes the currency selection.  
- Displays the **converted amount** in a styled message box (`.msg`).  
- Handles **default values**: `USD` as "From" currency and `INR` as "To" currency.  
- Validates the input amount, defaulting to `1` if left empty or invalid.  

**API:**  
- Uses [`https://api.budjet.org/fiat`](https://api.budjet.org/fiat) to fetch **real-time currency conversion rates**.  
- Example endpoint: https://api.budjet.org/fiat/USD/INR

- Extracts the `conversion_rate` from the JSON response to calculate the converted amount.  

**Event Handling:**  
- Listens for `change` events on dropdowns to **update the corresponding country flag**.  
- Listens for `click` events on the **Get Exchange Rate** button to:  
- Prevent default form submission  
- Validate the input amount  
- Fetch conversion rates from the API  
- Dynamically display the converted amount  

---

## ⚠️ Limitations

- 🕒 Conversion rates may **update once per day**, depending on the API.  
- ❌ Requires **internet connection** to fetch conversion rates.  
- 🔒 The free API may have **rate limits** for frequent requests.  

---

## 🛠 Installation

1. Clone this repository:

```bash
git clone https://github.com/BharathPadavu/currency-converter-app.git