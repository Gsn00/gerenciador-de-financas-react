import { CircleUserRound, LogOut } from "lucide-react";
import { Icon } from "./Icon";

function Header() {
  return (
    <div className="text-gray-800 flex items-center justify-between bg-white py-4 px-10 rounded-md shadow">
      <h1 className="font-bold">Gerenciador de Finanças</h1>
      <div className="flex items-center space-x-8">
        <button className="cursor-pointer">
          <Icon>
            <CircleUserRound />
          </Icon>
        </button>
        <button className="cursor-pointer">
          <Icon>
            <LogOut />
          </Icon>
        </button>
      </div>
    </div>
  );
}

export default Header;
