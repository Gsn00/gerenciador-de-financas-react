import { ChartLine, Check, X } from "lucide-react";

function Summary(props) {
  return (
    <div className="text-gray-800 flex flex-col space-y-4 bg-white py-4 px-10 rounded-md shadow">
      <div className="flex space-x-2">
        <ChartLine />
        <p className="font-bold">Resumo</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <p className="text-green-600">
          <b>Entradas:</b> R$ {props.inflows}
        </p>
        <p className="text-red-700">
          <b>Saídas:</b> R$ {props.outflows}
        </p>
        <p>
          <b>Saldo:</b> R$ {props.balance}
        </p>
        <p className="flex gap-2">
          <b>Status:</b>
          {props.balance >= 0 ? (
            <span className="flex gap-2">
              Positivo <Check />
            </span>
          ) : (
            <span className="flex gap-0.5">
              Negativo <X />
            </span>
          )}
        </p>
      </div>
    </div>
  );
}

export default Summary;
