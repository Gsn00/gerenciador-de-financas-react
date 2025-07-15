import { Plus } from "lucide-react";
import Input from "./Input";
import Select from "./Select";
import { useState } from "react";

function NewTransaction(props) {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [transactionType, setTransactionType] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="text-gray-800 flex flex-col space-y-4 bg-white py-4 px-10 rounded-md shadow">
      <div className="flex space-x-2">
        <Plus />
        <p className="font-bold">Nova Transação</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <Input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <Select
          value={transactionType}
          onChange={(event) => setTransactionType(event.target.value)}
        >
          <option value="" className="hidden">
            Selecione o tipo de transação
          </option>
          <option value="entrada">Entrada</option>
          <option value="saida">Saída</option>
        </Select>

        <Input
          type="date"
          placeholder="Data"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="col-span-2"
          type="text"
        >
          <option value="" className="hidden">
            Selecione uma categoria
          </option>
          <option value="contas">Contas</option>
          <option value="alimentacao">Alimentação</option>
          <option value="entretenimento">Entretenimento</option>
          <option value="saude">Saúde</option>
          <option value="bem-estar">Bem-estar</option>
          <option value="outros">Outros</option>
        </Select>

        <button
          onClick={() => {
            const result = props.onCreateTransaction(
              title,
              value,
              transactionType,
              date,
              category
            );

            if (result) {
              setTitle("");
              setValue("");
              setTransactionType("");
              setDate("");
              setCategory("");
            }
          }}
          className="font-bold text-white bg-green-500 col-end-4 cursor-pointer rounded-md py-0.5 px-3 shadow"
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default NewTransaction;
