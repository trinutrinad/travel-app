import { useState } from "react";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(0);
  const [converted, setConverted] = useState(0);
  const [currency, setCurrency] = useState("USD");

  const convert = () => {
    let rate = currency === "USD" ? 0.012 : 83.2; // mock rate: 1 INR = 0.012 USD, 1 USD = 83.2 INR
    setConverted(Number((amount * rate).toFixed(2)));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Currency Converter</h1>

      <div className="flex flex-col gap-4 max-w-sm">
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="border p-2"
        />

        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="border p-2"
        >
          <option value="USD">INR ➝ USD</option>
          <option value="INR">USD ➝ INR</option>
        </select>

        <button
          onClick={convert}
          className="bg-blue-600 text-white p-2 rounded"
        >
          Convert
        </button>

        {converted !== 0 && (
          <div className="text-xl font-semibold">
            Converted Amount: {currency === "USD" ? "$" : "₹"}{converted}
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrencyConverter;
