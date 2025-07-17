import { List, Trash, Pencil } from "lucide-react";
import { Link } from "react-router";
import { Icon } from "./Icon";

function Transactions(props) {
  return (
    <div className="text-gray-800 flex flex-col space-y-4 bg-white py-4 px-10 rounded-md shadow">
      <div className="flex space-x-2">
        <Icon>
          <List />
        </Icon>
        <p className="font-bold">Lista de Transações</p>
      </div>

      <table className="max-sm:hidden">
        <thead className="text-left">
          <tr>
            <th>Data</th>
            <th>Título</th>
            <th>Valor</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.title}</td>
              <td>
                {transaction.transactionType == "entrada" ? "+" : "-"}
                {transaction.value.toFixed(2)}
              </td>
              <td className="flex justify-end space-x-4">
                <button
                  onClick={() => props.onDeleteTransaction(transaction.id)}
                  className="cursor-pointer"
                >
                  <Trash />
                </button>
                <button className="cursor-pointer">
                  <Link
                    to={{
                      pathname: "/edittransaction",
                    }}
                    state={transaction}
                  >
                    <Pencil />
                  </Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="sm:hidden flex flex-col gap-4">
        {props.transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex flex-col gap-1 text-md rounded-md p-4 shadow"
          >
            <div className="flex justify-between">
              <span className="font-bold">Data:</span>
              <span>{transaction.date}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Título:</span>
              <span>{transaction.title}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Valor:</span>
              <span>{transaction.value}</span>
            </div>
            <div className="flex justify-between items-center">
              <button
                onClick={() => props.onDeleteTransaction(transaction.id)}
                className="cursor-pointer"
              >
                <Icon>
                  <Trash />
                </Icon>
              </button>
              <button className="cursor-pointer">
                <Link
                  to={{
                    pathname: "/edittransaction",
                  }}
                  state={transaction}
                >
                  <Icon>
                    <Pencil />
                  </Icon>
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Transactions;
