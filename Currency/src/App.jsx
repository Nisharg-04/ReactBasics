import { useState } from "react";
import "./App.css";
import InputBox from "./components/input";
import useCurrency from "./hooks/useCurrency";
function App() {
  // const [test, setTest] = useState(0);
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrency(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  function showamt(amt) {
    console.log(amt);
    setAmount(amt);
    console.log(amount);
  }
  // const con = () => {
  //   convert();
  // };
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
      }}
    >
      <input type="text" onChange={(e) => setTest(Number(e.target.value))} />
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <div className="w-full mb-1">
            <InputBox
              label="From"
              amount={amount}
              currencyOption={options}
              onCurrencyChange={(currency) => setAmount(amount)}
              selectCurrency={from}
              // onAmountChange={(amount) => {
              //   setAmount(amount);
              // }}
              setAmount={setAmount}
              convert={convert}
              showamt={showamt}
            />
          </div>
          <div className="relative w-full h-0.5">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              onClick={swap}
            >
              swap
            </button>
          </div>
          <div className="w-full mt-1 mb-4">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOption={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
            />
          </div>
          {/* <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert{from} to {to}
            </button> */}
        </div>
      </div>
    </div>
  );
}

export default App;
