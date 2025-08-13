import {React,useState} from 'react'
import MenuBar from '../components/painelEstoque/MenuBar'
import PainelMainClassificacaoFiscal from '../components/painelEstoque/PainelMainClassificacaoFiscal';
import PainelMainProduto from '../components/painelEstoque/PainelMainProduto';
import PainelMainFornecedor from '../components/painelEstoque/PainelMainFornecedor';
import PainelMainNotaFiscal from '../components/painelEstoque/PainelMainNotaFiscal';
import PainelMainEntrada from '../components/painelEstoque/PainelMainEntrada';


const PainelProduct = () => {

    const [actionPainelProduct,setActionPainelProduct]=useState("classificacaoFiscal");


    const painelsProduct={
        classificacaoFiscal:(<PainelMainClassificacaoFiscal/>),
        addProdutos:(<PainelMainProduto/>),
         fornecedor:(<PainelMainFornecedor/>),
        notaFiscal:(<PainelMainNotaFiscal/>),
        entrada:(<PainelMainEntrada/>),
        consulta:(<div>
            <h1>Consulta</h1>
        </div>),
        relatorio:(<div>
            <h1>Relatorio</h1>
        </div>),

    }

  return (
    <div>
        <nav className='headerMenu'>
            <MenuBar setActionPainelProduct={setActionPainelProduct}/>
            <hr />
            <div>

            </div>
        </nav>

        {painelsProduct[actionPainelProduct] || painelsProduct.classificacaoFiscal}
       </div>
  )
}

export default PainelProduct