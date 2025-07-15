import { List, Trash, Pencil } from "lucide-react";
import { Link } from "react-router";

function Transactions(props) {
  return (
    <div className="text-gray-800 flex flex-col space-y-4 bg-white py-4 px-10 rounded-md shadow">
      <div className="flex space-x-2">
        <List />
        <p className="font-bold">Lista de Transações</p>
      </div>

      <table>
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
    </div>
  );
}

export default Transactions;
