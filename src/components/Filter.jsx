import { Search } from "lucide-react";
import Select from "./Select";
import Input from "./Input";
import { Icon } from "./Icon";

function Filter(props) {
  return (
    <div className="text-gray-800 flex flex-col space-y-4 bg-white py-4 px-10 rounded-md shadow">
      <div className="flex space-x-2">
        <Icon>
          <Search />
        </Icon>
        <p className="font-bold">Filtros</p>
      </div>

      <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4">
        <div>
          <p className="font-bold">Tipo:</p>
          <Select
            onChange={(event) => props.setFilterDateType(event.target.value)}
            className="w-full"
          >
            <option value="todos">Todos</option>
            <option value="entradas">Entradas</option>
            <option value="saidas">Saídas</option>
          </Select>
        </div>

        <div>
          <p className="font-bold">De:</p>
          <Input
            value={props.filterDateFrom}
            onChange={(event) => props.setFilterDateFrom(event.target.value)}
            className="w-full"
            type="date"
          />
        </div>

        <div>
          <p className="font-bold">Até:</p>
          <Input
            value={props.filterDateTo}
            onChange={(event) => props.setFilterDateTo(event.target.value)}
            className="w-full"
            type="date"
          />
        </div>
      </div>
    </div>
  );
}

export default Filter;
