import { createContext, useState } from "react";
export const GlobalContext = createContext(null);
export default function GlobalState({ children }) {
  const [formData, setFormData] = useState({
    type: "expence",
    amount: 0,
    description: "",
  });

  const [value, setvalue] = useState("expence");
  const [totalExpence, setTotalExpence] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [allTransaction, setAllTransaction] = useState([]);
  function handleFormSubmit(currData) {
    if (!currData.description || !currData.amount) return;
    setAllTransaction([
      ...allTransaction,
      {
        ...currData,
        id: Date.now(),
      },
    ]);
  }

  // console.log(allTransaction);
  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        value,
        setvalue,
        totalExpence,
        totalIncome,
        setTotalIncome,
        setTotalExpence,
        allTransaction,
        setAllTransaction,
        handleFormSubmit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
