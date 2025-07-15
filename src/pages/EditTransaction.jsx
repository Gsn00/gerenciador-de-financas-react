import Header from "../components/Header";
import { Pencil } from "lucide-react";
import Input from "../components/Input";
import Select from "../components/Select";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

function EditTransaction() {
  const location = useLocation();
  const original = location.state;

  const id = original.id;
  const [title, setTitle] = useState(original.title);
  const [value, setValue] = useState(original.value);
  const [transactionType, setTransactionType] = useState(
    original.transactionType
  );
  const [date, setDate] = useState(original.date);
  const [category, setCategory] = useState(original.category);

  const navigate = useNavigate();

  return (
    <div className="flex justify-center min-w-full min-h-full bg-indigo-50">
      <div className="w-full max-w-[1280px] p-4 space-y-2">
        <Header />

        <div className="text-gray-800 flex flex-col space-y-4 bg-white py-4 px-10 rounded-md shadow">
          <div className="flex space-x-2">
            <Pencil />
            <p className="font-bold">Editar Transação</p>
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
                const editedTransaction = {
                  id,
                  title,
                  value,
                  transactionType,
                  date,
                  category,
                };
                navigate("/", { state: { editedTransaction } });
              }}
              className="font-bold text-white bg-green-500 col-end-4 cursor-pointer rounded-md py-0.5 px-3 shadow"
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTransaction;
