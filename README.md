# 💱 Currency Converter App

![Screenshot](./screenshot.png)

A **simple, interactive, and real-time currency converter** built using **HTML, CSS, and JavaScript**. Convert between multiple world currencies instantly with up-to-date exchange rates.  

---

## 🚀 Live Demo

Check it out here: [BharathPadavu/currency-converter-app](https://BharathPadavu.github.io/currency-converter-app/)

---

## 🛠 Features

- 🌎 Convert currencies between **any two countries**.
- 💹 Fetches **real-time conversion rates** using an API.
- 🏳️ Displays the **country flag** next to the currency using DOM manipulation.
- 🔢 Automatic handling of **invalid or empty input values**.
- ⚡ **Fast and lightweight** – no frameworks required.

---

## 💻 Technical Details

- **Languages:** HTML, CSS, JavaScript
- **DOM Manipulation:**  
  - Dynamically generates currency dropdown options from a **`countryList` object**.  
  - Updates the **flag images** when the currency changes.  
  - Displays conversion result in a styled message box.
- **API:**  
  - Uses [`https://api.budjet.org/fiat`](https://api.budjet.org/fiat) to fetch **conversion rates**.  
  - Example endpoint: `https://api.budjet.org/fiat/USD/INR`  
  - Response is parsed and applied to calculate the converted amount.
- **Event Handling:**  
  - Listens for `change` events on dropdowns to update flags.  
  - Listens for `click` on the submit button to calculate conversions.

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