import { useState } from 'react';
import OptionsSide from '../components/painelADM/OptionsSide'
import PainelProduct from './PainelProduct';

import "./ControlsPainelADM.css"

const ControlsPainelADM = () => {

  const [actionPainel,setActionPainel]=useState("relatorio");

  const paineis={
    relatorio:(<>
    <div className='configPainel'>
        <h1>Tela Relatorio</h1>
    </div>
    </>),
    estoque:(<>
        <div className='configPainel'>
            <h1 className='titlePage'>Estoque</h1>
            <PainelProduct/>
        </div>
    
        </>),
    usuario:(<>
      <div className='configPainel'>
          <h1>Tela Usuario</h1>
      </div>
  
      </>),



  }


  return (
    <div className='painel_adm'>
        <OptionsSide  setActionPainel={setActionPainel}/>
        <div className='painel_container'>
            {paineis[actionPainel]||paineis.relatorio}
        </div>

    </div>
  )
}

export default ControlsPainelADM