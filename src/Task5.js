import { useState } from 'react';

const exchangeRates = {
  USD: {
    EUR: 0.83,
    GBP: 0.72,
    JPY: 109.08,
  },
  EUR: {
    USD: 1.21,
    GBP: 0.86,
    JPY: 130.41,
  },
  GBP: {
    USD: 1.38,
    EUR: 1.16,
    JPY: 151.09,
  },
  JPY: {
    USD: 0.0092,
    EUR: 0.0077,
    GBP: 0.0066,
  },
};

function Task5() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState('');

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const handleConvertClick = () => {
    const rate = exchangeRates[fromCurrency][toCurrency];
    const resultValue = amount * rate;
    setResult(`${resultValue.toFixed(2)} ${toCurrency}`);
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <div>
        <label>
          Amount:
          <input type="number" value={amount} onChange={handleAmountChange} />
        </label>
      </div>
      <div>
        <label>
          From:
          <select value={fromCurrency} onChange={handleFromCurrencyChange}>
            {Object.keys(exchangeRates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          To:
          <select value={toCurrency} onChange={handleToCurrencyChange}>
            {Object.keys(exchangeRates[toCurrency]).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>
      </div>
      <button onClick={handleConvertClick}>Convert</button>
      {result && <p>Result: {result}</p>}
    </div>
  );
}

export default Task5;   
