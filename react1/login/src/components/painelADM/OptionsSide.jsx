

import { useState } from "react";
import "./OptionsSide.css";

const OptionsSide = ({setActionPainel}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBar = () => {
    setIsOpen(!isOpen);
  };

    function handleClick(painel){
      setActionPainel(painel)
    }
  return (
    <div id="barra" style={{ width: isOpen ? '150px' : '40px' }} onClick={toggleBar}>
      <ul>
        <li onClick={()=>handleClick("relatorio")}>
          <span className="material-icons bar-chart-icon">bar_chart</span>
          <span className="texto">Relatorio</span>
        </li>
        <li onClick={()=>handleClick("produto")}>
          <span className="material-icons inventory-2-icon">inventory_2</span>
          <span className="texto">Produtos</span>
        </li>
        <li onClick={()=>handleClick("usuario")}>
          <span className="material-icons">account_circle</span>
          <span className="texto">Usuarios</span>
        </li>
        <li>
          <span className="material-icons">logout</span>
          <span className="texto">Logout</span>
        </li>
      </ul>
    </div>
  );
};

export default OptionsSide;
