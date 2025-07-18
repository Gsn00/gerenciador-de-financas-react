import { ChartLine, Check, X } from "lucide-react";
import { Icon } from "./Icon";

function Summary(props) {
  return (
    <div className="text-gray-800 flex flex-col space-y-4 bg-white py-4 px-10 rounded-md shadow">
      <div className="flex space-x-2">
        <Icon>
          <ChartLine />
        </Icon>
        <p className="font-bold">Resumo</p>
      </div>

      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4">
        <p className="text-green-600 flex gap-2 w-full justify-between sm:justify-start">
          <b>Entradas:</b> R$ {props.inflows}
        </p>
        <p className="text-red-700 flex gap-2 w-full justify-between sm:justify-start">
          <b>Saídas:</b> R$ {props.outflows}
        </p>
        <p className="flex gap-2 w-full justify-between sm:justify-start">
          <b>Saldo:</b> R$ {props.balance}
        </p>
        <p className="flex gap-2 w-full justify-between sm:justify-start">
          <b>Status:</b>
          {props.balance >= 0 ? (
            <span className="flex gap-2">
              Positivo{" "}
              <Icon>
                <Check />
              </Icon>
            </span>
          ) : (
            <span className="flex gap-0.5">
              Negativo{" "}
              <Icon>
                <X />
              </Icon>
            </span>
          )}
        </p>
      </div>
    </div>
  );
}

export default Summary;
