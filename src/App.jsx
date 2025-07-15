import { useLocation } from "react-router";
import Filter from "./components/Filter";
import Header from "./components/Header";
import NewTransaction from "./components/NewTransaction";
import Summary from "./components/Summary";
import Transactions from "./components/Transactions";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [inflows, setInflows] = useState(0.0);
  const [outflows, setOutflows] = useState(0.0);
  const balance = inflows - outflows;
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || []
  );
  const [filterDateFrom, setFilterDateFrom] = useState("");
  const [filterDateTo, setFilterDateTo] = useState("");
  const [filterDateType, setFilterDateType] = useState("todos");

  const location = useLocation();

  useEffect(() => {
    const editedTransaction = location.state?.editedTransaction;
    onEditTransaction(editedTransaction);
  }, [location.state]);

  useEffect(() => {
    const inflowsSum = transactions
      .filter((t) => t.transactionType == "entrada")
      .reduce((sum, t) => sum + t.value, 0);
    const outflowsSum = transactions
      .filter((t) => t.transactionType == "saida")
      .reduce((sum, t) => sum + t.value, 0);

    setInflows(inflowsSum);
    setOutflows(outflowsSum);

    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  function onCreateTransaction(title, value, transactionType, date, category) {
    if (
      !title.trim() ||
      !value.trim() ||
      !transactionType.trim() ||
      !date.trim() ||
      !category.trim()
    ) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    value = parseFloat(value);

    const transaction = {
      id: uuidv4(),
      title,
      value,
      transactionType,
      date,
      category,
    };
    setTransactions([...transactions, transaction]);
    return true;
  }

  function onDeleteTransaction(id) {
    const newTransactions = transactions.filter((t) => t.id != id);
    setTransactions(newTransactions);
  }

  function onEditTransaction(editedTransaction) {
    if (!editedTransaction) return;
    const newTransactions = transactions.map((t) => {
      if (t.id == editedTransaction.id) {
        return {
          ...t,
          title: editedTransaction.title,
          value: parseFloat(editedTransaction.value),
          transactionType: editedTransaction.transactionType,
          date: editedTransaction.date,
          category: editedTransaction.category,
        };
      }
      return t;
    });
    setTransactions(newTransactions);
  }

  function getFilteredTransactions() {
    const from = filterDateFrom.trim();
    const to = filterDateTo.trim();

    if (to && from > to) return transactions;

    let filteredTransaction = transactions.filter((t) => {
      if (filterDateType == "entradas") return t.transactionType == "entrada";
      if (filterDateType == "saidas") return t.transactionType == "saida";
      return true;
    });

    filteredTransaction = filteredTransaction.filter((t) => {
      if (!from && to) return t.date <= to;
      if (from && !to) return t.date >= from;
      if (from && to) return t.date >= from && t.date <= to;
      return true;
    });

    return filteredTransaction;
  }

  return (
    <div className="flex justify-center min-w-full min-h-full bg-indigo-50">
      <div className="w-full max-w-[1280px] p-4 space-y-2">
        <Header />
        <Summary
          inflows={inflows.toFixed(2)}
          outflows={outflows.toFixed(2)}
          balance={balance.toFixed(2)}
        />
        <NewTransaction onCreateTransaction={onCreateTransaction} />
        <Transactions
          transactions={getFilteredTransactions()}
          onDeleteTransaction={onDeleteTransaction}
        />
        <Filter
          filterDateFrom={filterDateFrom}
          setFilterDateFrom={setFilterDateFrom}
          filterDateTo={filterDateTo}
          setFilterDateTo={setFilterDateTo}
          filterDateType={filterDateType}
          setFilterDateType={setFilterDateType}
        />
      </div>
    </div>
  );
}

export default App;
