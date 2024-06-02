import React from "react";

function InputBox({
  label,
  amount,
  setAmount,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "usd",
  className = "",
  convert,
  showamt
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => {
            console.log(e.target.value);
            showamt(Number(e.target.value))
            // setAmount(Number(e.target.value));
            // showamt()
            // console.log(amount);
            convert();
          }}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOption.map((currency) => {
            return (
              <option key={currency} value={currency}>
                {currency}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
