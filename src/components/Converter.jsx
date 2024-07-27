import React, { useState, useEffect } from "react";
import "../index.css";

function Converter() {
  const [from, setFrom] = useState("INR");
  const [to, setTo] = useState("USD");
  const [currencyQuantity, setCurrencyQuantity] = useState("1");
  const [exchangeRates, setExchangeRates] = useState({});
  const [toValue, setToValue] = useState(0);

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
      .then((response) => response.json())
      .then((data) => {
        setExchangeRates(data.rates);
      })
      .catch((error) => console.log(error));
  }, [from]);

  useEffect(() => {
    if (exchangeRates[to]) {
      setToValue((currencyQuantity * exchangeRates[to]).toFixed(2));
    }
  }, [currencyQuantity, to, from, exchangeRates]);

  function handleFromCurrencyChange(event) {
    setFrom(event.target.value);
  }

  function handleToCurrencyChange(event) {
    setTo(event.target.value);
  }

  function renderCurrencyOptions() {
    return Object.keys(exchangeRates).map((currency) => (
      <option key={currency} value={currency}>
        {currency}
      </option>
    ));
  }

  function swapCurrencies() {
    const temp = from;
    setFrom(to);
    setTo(temp);
  }

  return (
    <>
      <div className="bg-violet-500">
        <h1 className="text-5xl flex justify-center mt-10 text-white">
          Currency Converter
        </h1>
        <div className="flex justify-center items-center flex-col md:flex-row p-10 md:p-32 ">
          <div className="p-5 md:p-10">
            <h1 className="text-white">FROM</h1>
            <div className="border-2 w-40 md:w-60 h-40 p-1 rounded-md bg-white">
              <select
                value={from}
                onChange={handleFromCurrencyChange}
                className="w-full">
                {renderCurrencyOptions()}
              </select>
              <input
                type="number"
                value={currencyQuantity}
                onChange={(e) => setCurrencyQuantity(e.target.value)}
                className="w-full mt-2"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={swapCurrencies}
              className="text-white text-2xl bg-white m-4 p-2 rounded-md">
              <img src="Images/swap.png" width={30} />
            </button>
          </div>
          <div className="p-5 md:p-10">
            <h1 className="text-white">TO</h1>
            <div className="border-2 w-40 md:w-60 h-40 p-1 rounded-md bg-white">
              <select
                value={to}
                onChange={handleToCurrencyChange}
                className="w-full">
                {renderCurrencyOptions()}
              </select>
              <h1 className="mt-2">
                {toValue} {to}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Converter;